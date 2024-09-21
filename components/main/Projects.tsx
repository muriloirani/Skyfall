import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Notícias
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/im1.jpg"
          title="Novas Técnicas de Pentest em Redes Corporativas"
          description="Descubra as mais recentes estratégias usadas por profissionais de segurança para testar e proteger redes empresariais de ataques maliciosos. Saiba como essas técnicas podem fortalecer a sua infraestrutura."
        />
        <ProjectCard
          src="/im2.jpg"
          title="Ferramentas de Pentest Automatizado: O Futuro da Segurança"
          description="Com o avanço das ferramentas de pentest automatizado, é possível simular ataques complexos de maneira eficiente. Explore as melhores opções do mercado e veja como aplicá-las no seu ambiente de TI."
        />
        <ProjectCard
          src="/im3.jpg"
          title="Análise de Vulnerabilidades: Como Identificar Pontos Fracos em Aplicações Web"
          description="Entenda o processo de análise de vulnerabilidades em sistemas web e veja exemplos de como as falhas são exploradas em pentests. Garanta a proteção dos seus dados com práticas recomendadas."
        />
      </div>
    </div>
  );
};

export default Projects;
