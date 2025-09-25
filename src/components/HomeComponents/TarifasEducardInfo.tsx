import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { MegaphoneIcon } from 'lucide-react';

export const TarifasEducardInfo = () => {
  return (
    <main className="mt-4 flex w-full flex-col gap-6 sm:grid sm:grid-cols-4 sm:px-8">
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="font-bold">
              Quem <span className="text-tertiary">pode</span> ter um EDUCARD?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="max-h-28 overflow-y-auto px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-semibold text-zinc-800 sm:text-sm">
              • Todo <span className="text-secondary font-bold">Estudante</span>{' '}
              da <span className="text-secondary font-bold">Rede Pública</span>,
              seja do ensino fundamental, médio ou superior.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-2"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="text-left font-bold">
              Como <span className="text-tertiary">solicitar</span> o EDUCARD?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="max-h-28 overflow-y-auto px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-semibold text-zinc-800 sm:text-sm">
              • Acesse o{' '}
              <span className="text-secondary font-bold">Portal do Aluno</span>,
              preencha os formulários necessários e aguarde a aprovação.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-3"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="text-left font-bold">
              Quais os <span className="text-tertiary">benefícios</span> do
              EDUCARD?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="max-h-28 overflow-y-auto px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-semibold text-zinc-800 sm:text-sm">
              • Descontos com{' '}
              <span className="text-secondary font-bold">valor fixo</span> para
              todos os estudantes no período de vigência do calendário
              escolar/adacêmico
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-4"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="text-left font-bold">
              Quantas vezes posso{' '}
              <span className="text-tertiary">utilizar</span> o EDUCARD?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="max-h-28 overflow-y-auto px-4 pb-4">
            <p className="flex flex-col gap-2 text-justify text-xs leading-5 font-semibold text-zinc-800 sm:text-sm">
              <span>
                • <span className="text-secondary font-bold">2 (duas)</span>{' '}
                utilizações no mesmo dia, se aluno de curso{' '}
                <span className="text-yellowText font-bold underline underline-offset-2">
                  regular
                </span>
                ;
              </span>
              <span>
                • <span className="text-secondary font-bold">4 (quatro)</span>{' '}
                utilizações no mesmo dia, se aluno de curso{' '}
                <span className="text-yellowText font-bold underline underline-offset-2">
                  integral
                </span>
                ;
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};
