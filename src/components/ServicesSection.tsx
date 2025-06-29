
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type ServicesSectionProps = {
  services: Service[];
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => (
  <section id="services" className="py-16 sm:py-20 px-4 sm:px-6">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">Services Offered</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-border hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg mb-3 sm:mb-4">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-primary text-lg sm:text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
