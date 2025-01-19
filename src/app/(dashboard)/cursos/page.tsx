"use client";

import { useState } from "react";
import {
  PlusIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardCheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface Course {
  id: string;
  name: string;
  group: string;
  category: string;
  duration: string;
  description: string;
  certifications: string[];
  prerequisites: string[];
  resources: string[];
}

const initialCourseData: Course = {
  id: "",
  name: "",
  group: "",
  category: "",
  duration: "",
  description: "",
  certifications: [],
  prerequisites: [],
  resources: [],
};

export default function Cursos() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentCourse, setCurrentCourse] = useState<Course>(initialCourseData);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "certifications" | "prerequisites" | "resources"
  ) => {
    const { value } = e.target;
    setCurrentCourse((prev) => ({
      ...prev,
      [field]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = () => {
    if (isEditing) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === currentCourse.id ? currentCourse : course
        )
      );
    } else {
      const newCourse = { ...currentCourse, id: Date.now().toString() };
      setCourses((prev) => [...prev, newCourse]);
    }
    setCurrentCourse(initialCourseData);
    setIsEditing(false);
  };

  const editCourse = (course: Course) => {
    setCurrentCourse(course);
    setIsEditing(true);
    setSelectedCourseId(course.id);
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
    if (selectedCourseId === id) setSelectedCourseId(null);
  };

  const toggleCourseDetails = (id: string) => {
    setSelectedCourseId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <aside className="w-80 bg-white shadow-md overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Cursos</h2>
          <button
            onClick={() => {
              setCurrentCourse(initialCourseData);
              setIsEditing(false);
            }}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 flex items-center justify-center mb-4"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Novo Curso
          </button>
          {courses.map((course) => (
            <div key={course.id} className="mb-2 border-b pb-2">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => toggleCourseDetails(course.id)}
              >
                <span className="font-medium">{course.name}</span>
                {selectedCourseId === course.id ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </div>
              {selectedCourseId === course.id && (
                <div className="ml-4 mt-2">
                  <p className="text-sm text-gray-600">Grupo: {course.group}</p>
                  <p className="text-sm text-gray-600">
                    Categoria: {course.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    Duração: {course.duration}
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => editCourse(course)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Gestão de Cursos</h1>

        {/* Formulário de Curso */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            {isEditing ? "Editar Curso" : "Novo Curso"}
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={currentCourse.name}
              onChange={handleInputChange}
              placeholder="Nome do curso"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="group"
              value={currentCourse.group}
              onChange={handleInputChange}
              placeholder="Grupo"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="category"
              value={currentCourse.category}
              onChange={handleInputChange}
              placeholder="Categoria"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="duration"
              value={currentCourse.duration}
              onChange={handleInputChange}
              placeholder="Duração"
              className="p-2 border rounded"
            />
          </div>
          <textarea
            name="description"
            value={currentCourse.description}
            onChange={handleInputChange}
            placeholder="Descrição do curso"
            className="w-full p-2 border rounded mb-4"
            rows={4}
          />
          <input
            type="text"
            value={currentCourse.certifications.join(", ")}
            onChange={(e) => handleArrayInputChange(e, "certifications")}
            placeholder="Certificações (separadas por vírgula)"
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            value={currentCourse.prerequisites.join(", ")}
            onChange={(e) => handleArrayInputChange(e, "prerequisites")}
            placeholder="Pré-requisitos (separados por vírgula)"
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            value={currentCourse.resources.join(", ")}
            onChange={(e) => handleArrayInputChange(e, "resources")}
            placeholder="Links e recursos (separados por vírgula)"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            {isEditing ? "Atualizar Curso" : "Criar Curso"}
          </button>
        </div>

        {/* Estatísticas ou informações adicionais */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Total de Cursos</h3>
            <p className="text-3xl font-bold text-blue-500">{courses.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Grupos</h3>
            <p className="text-3xl font-bold text-green-500">
              {new Set(courses.map((c) => c.group)).size}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Categorias</h3>
            <p className="text-3xl font-bold text-purple-500">
              {new Set(courses.map((c) => c.category)).size}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
