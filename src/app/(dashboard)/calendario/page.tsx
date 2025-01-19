"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

// Configuração do localizador para o react-big-calendar
const localizer = momentLocalizer(moment);

interface Event {
  id: number;
  start: Date;
  end: Date;
  title: string;
  description: string;
  type: "Reunião" | "Lembrete" | "Tarefa";
}

export default function Calendario() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    type: "Reunião",
    start: new Date(),
    end: new Date(),
  });

  const handleAddEvent = () => {
    if (newEvent.title.trim()) {
      const event: Event = {
        id: Date.now(),
        start: newEvent.start,
        end: newEvent.end,
        title: newEvent.title,
        description: newEvent.description,
        type: newEvent.type as "Reunião" | "Lembrete" | "Tarefa",
      };
      setEvents((prev) => [...prev, event]);
      setNewEvent({
        title: "",
        description: "",
        type: "Reunião",
        start: new Date(),
        end: new Date(),
      });
      setIsModalOpen(false);
    }
  };

  const eventStyleGetter = (event: Event) => {
    let backgroundColor = "#3174ad";
    switch (event.type) {
      case "Reunião":
        backgroundColor = "#3174ad";
        break;
      case "Lembrete":
        backgroundColor = "#4caf50";
        break;
      case "Tarefa":
        backgroundColor = "#ff9800";
        break;
    }
    return { style: { backgroundColor } };
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Calendário</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Adicionar Evento
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={(event) => alert(event.description)}
          views={["month", "week", "day", "agenda"]}
        />
      </div>

      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="fixed z-10 inset-0 flex items-center justify-center"
        >
          <div className="bg-black bg-opacity-50 fixed inset-0" />
          <div className="bg-white rounded-lg p-6 shadow-lg z-20 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              Adicionar Novo Evento
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Título</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Descrição</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full p-2 border rounded-md"
                  rows={3}
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Tipo</label>
                <select
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      type: e.target.value as any,
                    }))
                  }
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Reunião">Reunião</option>
                  <option value="Lembrete">Lembrete</option>
                  <option value="Tarefa">Tarefa</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Início</label>
                <input
                  type="datetime-local"
                  value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      start: new Date(e.target.value),
                    }))
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Fim</label>
                <input
                  type="datetime-local"
                  value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      end: new Date(e.target.value),
                    }))
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddEvent}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Adicionar
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
