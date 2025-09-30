import { Link } from 'react-router-dom';
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
              Quem <span className="text-quarter">pode</span> ter um EDUCARD?
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
              Como <span className="text-quarter">solicitar</span> o EDUCARD?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="max-h-28 overflow-y-auto px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-semibold text-zinc-800 sm:text-sm">
              • Acesse o{' '}
              <Link
                to="/portal-do-aluno/login"
                className="text-secondary hover:text-primary font-bold transition-all"
              >
                Portal do Aluno
              </Link>
              , preencha os formulários necessários e aguarde a aprovação.
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
              Quais os <span className="text-quarter">benefícios</span> do
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
              Quantas vezes posso <span className="text-quarter">utilizar</span>{' '}
              o EDUCARD?
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

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-5"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="font-bold">
              <span className="text-quarter"> O que preciso </span> para ter um
              <span className="text-quarter"> EDUCARD</span>?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="flex max-h-80 flex-col gap-2 px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Formulário do{' '}
              <span className="text-secondary font-bold">ano vigente</span>,
              assinado pelo aluno ou responsável legal
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Cartão EDUCARD – O aluno que extraviou o cartão deverá pagar a
              segunda via que tem o custo de 3 tarifas:{' '}
              <span className="font-bold text-green-600">R$ 19,50</span>
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Cópia de <span className="text-secondary font-bold">RG</span> ou{' '}
              <span className="text-secondary font-bold">
                Certidão de Nascimento
              </span>{' '}
              (anexar frente e verso do RG)
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              •{' '}
              <span className="text-secondary font-bold">
                Comprovante de residência
              </span>{' '}
              atual em nomes dos pais/aluno ou declaração reconhecida em
              cartório
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              •{' '}
              <span className="text-secondary font-bold">
                Declaração de matrícula
              </span>{' '}
              da instituição de ensino do ano letivo 2025
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Pagamento da taxa de 3 tarifas integrais{' '}
              <span className="font-bold text-green-600">R$ 19,50</span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-6"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="font-bold">
              <span className="text-quarter"> O que preciso </span> para ter um
              <span className="text-quarter"> VEM ESCOLAR</span>?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="flex max-h-80 flex-col gap-2 px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Formulário do{' '}
              <span className="text-secondary font-bold">ano vigente</span>,
              assinado pelo aluno ou responsável legal
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Cartão VEM ESCOLAR – O aluno que extraviou o cartão deverá pagar
              a segunda via que tem o custo de 3 tarifas:{' '}
              <span className="font-bold text-green-600">R$ 19,50</span>
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Cópia de <span className="text-secondary font-bold">RG</span> ou{' '}
              <span className="text-secondary font-bold">
                Certidão de Nascimento
              </span>{' '}
              (anexar frente e verso do RG)
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              •{' '}
              <span className="text-secondary font-bold">
                Comprovante de residência
              </span>{' '}
              atual em nomes dos pais/aluno ou declaração reconhecida em
              cartório
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              •{' '}
              <span className="text-secondary font-bold">
                Declaração de matrícula
              </span>{' '}
              da instituição de ensino do ano letivo 2025
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Pagamento da taxa de 2 tarifas integrais{' '}
              <span className="font-bold text-green-600">R$ 13,00</span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-7"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="text-left font-bold">
              Documentação <span className="text-quarter">Extra</span>
            </h3>
          </AccordionTrigger>
          <AccordionContent className="flex max-h-80 flex-col gap-2 px-4 pb-4">
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Alunos que estudam no
              <span className="text-secondary font-bold"> CEEBJA</span> -
              declaração constando os dias de aulas
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Alunos da
              <span className="text-secondary font-bold"> UTFPR</span> ou{' '}
              <span className="text-primary font-bold"> UNICENTRO </span>- grade
              de horários
            </p>
            <p className="text-justify text-xs leading-5 font-medium text-zinc-800 sm:text-sm">
              • Alunos de{' '}
              <span className="text-secondary font-bold">
                Instituições Particulares
              </span>{' '}
              que são bolsistas – as instituições devem firmar convênio junto à
              Secretaria Municipal de Educação
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-8"
          className="rounded-2xl border-0 bg-white shadow-md transition-all hover:scale-101"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-3 p-4 hover:no-underline">
            <div className="bg-primary/10 flex items-center justify-center rounded-full p-2 shadow-md">
              <MegaphoneIcon className="text-primary size-8 flex-shrink-0" />
            </div>
            <h3 className="text-left font-bold">
              Possui <span className="text-quarter">taxas</span> para solicitar
              os cartões?
            </h3>
          </AccordionTrigger>
          <AccordionContent className="max-h-48 overflow-y-auto px-4 pb-4">
            <p className="flex flex-col gap-2 text-justify text-xs leading-5 font-semibold text-zinc-800 sm:text-sm">
              <span>
                Sim! Ambos os cartões precisam de um pagamento prévio para a sua
                utilização
              </span>

              <span>
                • Taxa EDUCARD: <span className="text-green-600">R$ 19,50</span>{' '}
                (3 tarifas integrais)
              </span>

              <span>
                • Taxa VEM ESCOLAR:{' '}
                <span className="text-green-600">R$ 13,00</span> (2 tarifas
                integrais)
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};
