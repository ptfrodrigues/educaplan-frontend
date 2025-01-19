import React from "react";
import {
  PlusIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

// Componente para o card de aula
const ClassCard = ({ color, title, time, module, group, institution }) => (
  <div className={`bg-${color}-500 text-white p-4 rounded-lg shadow-md`}>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="flex items-center">
      <ClockIcon className="h-4 w-4 mr-2" />
      {time}
    </p>
    <p>{module}</p>
    <p>Turma {group}</p>
    <p>{institution}</p>
    <button className="mt-2 bg-white text-black px-2 py-1 rounded flex items-center text-sm">
      <PlusIcon className="h-4 w-4 mr-1" /> Adicionar Sessão
    </button>
  </div>
);

export default function PainelPrincipal() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Painel Principal</h1>

      {/* Vista Geral */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Vista Geral</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ClassCard
            color="blue"
            title="Programação Web"
            time="09:00 - 12:00"
            module="Módulo 3"
            group="A"
            institution="CESAE Digital"
          />
          <ClassCard
            color="green"
            title="Design UX/UI"
            time="14:00 - 17:00"
            module="Módulo 2"
            group="B"
            institution="CESAE Digital"
          />
          <ClassCard
            color="gray"
            title="Gestão de Projetos"
            time="18:00 - 21:00"
            module="Módulo 1"
            group="C"
            institution="CESAE Digital"
          />
        </div>
      </div>

      {/* Coordenação de Projetos */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Coordenação de Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold">Projetos em Andamento</h3>
            <p>5 projetos ativos</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold">Projetos Concluídos</h3>
            <p>12 projetos este ano</p>
          </div>
        </div>
      </div>

      {/* Cursos a Decorrer */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cursos a Decorrer</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-500" />
              <span>Desenvolvimento Web Full Stack</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-5 w-5 mr-1 text-gray-500" />
              <span>25 alunos</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
            <div className="flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-green-500" />
              <span>Design Gráfico Avançado</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-5 w-5 mr-1 text-gray-500" />
              <span>18 alunos</span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
            <div className="flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-purple-500" />
              <span>Marketing Digital</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-5 w-5 mr-1 text-gray-500" />
              <span>30 alunos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
