import type { DatePickerInputPropsInterface } from '@/utils/interfaces.interface';
import { CalendarDaysIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const DatePickerInput = ({
  value,
  onChange,
  required = false,
  placeholder,
}: DatePickerInputPropsInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );
  const [viewDate, setViewDate] = useState(
    value ? new Date(value) : new Date(2005, 0, 1)
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${day}/${mes}/${ano}`;
  };

  const formatDateForInput = (date: Date) => {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${day}`;
  };

  const getDaysInMonth = (date: Date) => {
    const ano = date.getFullYear();
    const mes = date.getMonth();
    const primeiroDia = new Date(ano, mes, 1).getDay();
    const diasEmMeses = new Date(ano, mes + 1, 0).getDate();

    const dias = [];
    for (let i = 0; i < primeiroDia; i++) {
      dias.push(null);
    }
    for (let i = 1; i <= diasEmMeses; i++) {
      dias.push(i);
    }
    return dias;
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
    onChange(formatDateForInput(newDate));
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handlePrevYear = () => {
    setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
  };

  const handleNextYear = () => {
    setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dias = getDaysInMonth(viewDate);
  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-400 bg-white px-4 py-2.5 shadow-sm transition-all hover:shadow-md"
      >
        <CalendarDaysIcon className="size-5 text-gray-400" />
        <input
          type="text"
          value={formatDate(selectedDate)}
          placeholder={placeholder}
          readOnly
          required={required}
          className="w-full cursor-pointer text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-full rounded-2xl border border-zinc-300 bg-white p-4 shadow-2xl sm:w-80">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevYear}
              className="rounded-lg p-1.5 transition-colors hover:bg-gray-200"
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="text-sm font-semibold text-gray-700">
              {viewDate.getFullYear()}
            </span>
            <button
              type="button"
              onClick={handleNextYear}
              className="rounded-lg p-1.5 transition-colors hover:bg-gray-200"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="rounded-lg p-1.5 transition-colors hover:bg-gray-200"
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="text-sm font-semibold text-gray-700">
              {meses[viewDate.getMonth()]}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="rounded-lg p-1.5 transition-colors hover:bg-gray-200"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-1">
            {diasDaSemana.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {dias.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} />;
              }

              const isSelected =
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === viewDate.getMonth() &&
                selectedDate.getFullYear() === viewDate.getFullYear();

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDateSelect(day)}
                  className={`rounded-lg py-2 text-sm transition-all ${
                    isSelected
                      ? 'from-quarter to-tertiary bg-gradient-to-bl font-semibold text-white shadow-md'
                      : 'hover:bg-primary/25 text-gray-700'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
