"use client";

import React from "react";
import {
  CurrencyEuroIcon,
  AcademicCapIcon,
  ClockIcon,
  ChartPieIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const pieData = [
  { name: "Desenvolvimento Web", value: 4000 },
  { name: "UX/UI Design", value: 3000 },
  { name: "Marketing Digital", value: 2000 },
];

const barData = [
  { mes: "Jan", valor: 2400 },
  { mes: "Fev", valor: 1398 },
  { mes: "Mar", valor: 9800 },
  { mes: "Abr", valor: 3908 },
  { mes: "Mai", valor: 4800 },
  { mes: "Jun", valor: 3800 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AreaFinanceira() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Área Financeira</h1>

      {/* Resumo Financeiro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Recebido</h3>
            <CurrencyEuroIcon className="h-8 w-8" />
          </div>
          <p className="text-3xl font-bold mt-2">€9.800,00</p>
          <p className="text-sm mt-2">+15% em relação ao mês anterior</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Cursos Ativos</h3>
            <AcademicCapIcon className="h-8 w-8" />
          </div>
          <p className="text-3xl font-bold mt-2">5</p>
          <p className="text-sm mt-2">2 novos cursos este mês</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Horas Lecionadas</h3>
            <ClockIcon className="h-8 w-8" />
          </div>
          <p className="text-3xl font-bold mt-2">120h</p>
          <p className="text-sm mt-2">+10h em relação ao mês anterior</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <ChartPieIcon className="h-6 w-6 mr-2 text-blue-500" />
            Distribuição de Receita por Curso
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-2 text-green-500" />
            Receita Mensal
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela de Cursos */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Cursos Matriculados</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Curso</th>
                <th className="py-2 px-4 text-left">Horas</th>
                <th className="py-2 px-4 text-left">Valor/Hora</th>
                <th className="py-2 px-4 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Desenvolvimento Web Full Stack</td>
                <td className="py-2 px-4">60h</td>
                <td className="py-2 px-4">€50,00</td>
                <td className="py-2 px-4">€3.000,00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4">UX/UI Design</td>
                <td className="py-2 px-4">40h</td>
                <td className="py-2 px-4">€45,00</td>
                <td className="py-2 px-4">€1.800,00</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Marketing Digital</td>
                <td className="py-2 px-4">30h</td>
                <td className="py-2 px-4">€40,00</td>
                <td className="py-2 px-4">€1.200,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
