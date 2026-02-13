import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Upload, X } from "lucide-react";

interface JobApplicationFormProps {
  position: string;
  onClose: () => void;
}

export default function JobApplicationForm({ position, onClose }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const submitApplication = trpc.careers.submitApplication.useMutation({
    onSuccess: () => {
      toast.success("Candidatura enviada com sucesso!");
      onClose();
    },
    onError: (error) => {
      toast.error(`Erro ao enviar candidatura: ${error.message}`);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Arquivo muito grande. Máximo 5MB.");
        return;
      }
      // Validate file type
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validTypes.includes(file.type)) {
        toast.error("Formato inválido. Use PDF ou DOC/DOCX.");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resumeFile) {
      toast.error("Por favor, anexe seu currículo.");
      return;
    }

    setIsUploading(true);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result?.toString().split(",")[1];
        if (!base64) {
          toast.error("Erro ao processar arquivo.");
          setIsUploading(false);
          return;
        }

        await submitApplication.mutateAsync({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          position,
          resumeBase64: base64,
          resumeFilename: resumeFile.name,
          resumeMimeType: resumeFile.type,
          portfolioUrl: formData.portfolioUrl || undefined,
          message: formData.message || undefined,
        });

        setIsUploading(false);
      };
      reader.onerror = () => {
        toast.error("Erro ao ler arquivo.");
        setIsUploading(false);
      };
      reader.readAsDataURL(resumeFile);
    } catch (error) {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white font-[Orbitron]">
            Candidatar-se: {position}
          </h3>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white/80">Nome Completo *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#0a0a0a] border-white/10 text-white"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white/80">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#0a0a0a] border-white/10 text-white"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white/80">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-[#0a0a0a] border-white/10 text-white"
            />
          </div>

          <div>
            <Label htmlFor="resume" className="text-white/80">Currículo (PDF/DOC) *</Label>
            <div className="mt-2">
              {resumeFile ? (
                <div className="flex items-center gap-2 p-3 bg-[#0a0a0a] border border-white/10 rounded-md">
                  <Upload size={20} className="text-[#C61331]" />
                  <span className="text-white text-sm flex-1">{resumeFile.name}</span>
                  <button
                    type="button"
                    onClick={() => setResumeFile(null)}
                    className="text-white/60 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex items-center justify-center gap-2 p-4 bg-[#0a0a0a] border border-dashed border-white/20 rounded-md cursor-pointer hover:border-[#C61331]/50 transition-colors">
                  <Upload size={20} className="text-white/60" />
                  <span className="text-white/60 text-sm">Clique para selecionar arquivo (máx 5MB)</span>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="portfolioUrl" className="text-white/80">Link do Portfólio</Label>
            <Input
              id="portfolioUrl"
              type="url"
              placeholder="https://..."
              value={formData.portfolioUrl}
              onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
              className="bg-[#0a0a0a] border-white/10 text-white"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-white/80">Mensagem (Opcional)</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Conte-nos por que você é ideal para esta vaga..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#0a0a0a] border-white/10 text-white resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isUploading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#C61331] hover:bg-[#ff4444]"
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={16} />
                  Enviando...
                </>
              ) : (
                "Enviar Candidatura"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
