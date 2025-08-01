import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como encontrar-nos
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Faça marcação e visite-nos
          </p>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            <a href="#mapa">
              <MapPin className="w-4 h-4 mr-2" />
              Ver No Mapa
            </a>
          </Button>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-primary text-white p-8 rounded-t-lg mx-4 lg:mx-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Endereço</h3>
              <p className="text-sm opacity-90">
                Largo do Carmo,77-2 B
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Telemóvel</h3>
              <div className="text-sm opacity-90">
                <p>(+351) 912 258 575</p>
                <p>(+351) 289 889 560</p>
                <p className="text-xs mt-1">*valor de uma chamada local</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm opacity-90">
                medicarmo@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 mx-4 lg:mx-6">
          {/* Contact Form with white background */}
          <div id="marcacao" className="bg-white p-6 lg:p-8 form-shadow -mt-8 lg:-ml-6 rounded-bl-lg lg:rounded-bl-lg rounded-br-lg lg:rounded-br-none">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fazer Marcação
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                {...register("name", { required: true })}
                placeholder="Seu Nome"
                className="w-full"
              />
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="Seu Email"
                className="w-full"
              />
              <Input
                {...register("phone", { required: true })}
                type="tel"
                placeholder="Seu Número de Telemóvel"
                className="w-full"
              />
              <Textarea
                {...register("message")}
                placeholder="Mensagem"
                rows={6}
                className="w-full resize-none"
              />
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                Enviar Pedido
              </Button>
            </form>
          </div>

          {/* Map */}
          <div id="mapa" className="lg:-mt-8">
            <Card className="h-full map-shadow">
              <CardContent className="p-0 h-full min-h-[300px] lg:min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.123456789!2d-7.934308!3d37.019211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAxJzA5LjIiTiA3wrA1NicwMy41Ilc!5e0!3m2!1sen!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  className="border-0 rounded-br-lg lg:rounded-r-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Medicarmo"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;