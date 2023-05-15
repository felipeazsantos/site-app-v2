<template>
  <div>
    <SectionTitle title="Minha trajetória profissional" id="worketAt" />
    <v-row>
      <v-col>
        <v-timeline dark dense>
          <v-timeline-item
            v-for="(company) in companiesWorked"
            :key="company.name"
            color="teal lighten-1"
          >
            <h3
              class="pb-4 white--text text--darken-3 text-h6 font-weight-bold"
            >
              {{ company.name }} ({{ company.period }})
            </h3>

            <v-expansion-panels>
              <v-expansion-panel v-for="role in company.roles" :key="role.name">
                <v-expansion-panel-header
                  class="font-weight-medium text-subtitle-1"
                >
                  {{ role.name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="text-justify">
                    {{ role.description }}
                  </div>
                  <div class="d-flex flex-wrap">
                    <span
                      class="mr-2 mt-3 font-weight-medium teal--text text--lighten-1"
                      >Tecnologias:</span
                    >
                    <v-chip
                      class="mr-2 mt-2 white--text"
                      color="teal lighten-1"
                      v-for="tecnology in role.technologies"
                      :key="tecnology"
                    >
                      {{ tecnology }}
                    </v-chip>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";

export default {
  components: { SectionTitle },
  data() {
    return {
      windowWidth: window.innerWidth,
      companiesWorked: [
        {
          name: "CWS Digital",
          period: "2020 - Atualmente",
          roles: [
            {
              name: "Full Stack Developer",
              description: `
                Manutenção e implementação de funcionalidades da plataforma CWS utilizando
                metodologia ágil Scrum, plataforma que oferece a estrutura de tecnologia e serviços para a
                transformação digital através dos produtos de Marketplace , E-commerce e Balcão Digital ,
                nos segmentos B2B e B2C.
              `,
              technologies: [
                "Java",
                "JPA/Hibernate",
                "Spring Framework",
                "React.js",
                "Vue.js",
                "Node.js",
                "Golang",
                "Javascript",
                "Typescript",
                "HTML",
                "CSS",
                "Bootstrap",
                "JQuery",
                "Grails",
                "Groovy",
                "MySQL",
                "Postgres",
                "Docker",
                "API Rest",
                "Microservices",
                "MVC",
              ],
            },
            {
              name: "Product Owner",
              description: `
              - Pesquisa e benchmarking com diversas soluções do mercado de tecnologia.
              - Definição de parceiros de tecnologia para agregar valor ao produto.
              - Participação das cerimônias do Framework Scrum: Daily, Refinamento, Planning, Review,
              Retro.
              - Gestão do backlog utilizando a ferramenta Jira.
              - Priorização das atividades do backlog que agregam mais valor ao produto.
              - Negociação e alinhamento de prazos com stakeholders.
              - Suporte aos Desenvolvedores tirando dúvidas sobre as tasks.
              - Criação de épicos, histórias de usuário, Roadmap do produto.
              - Envio de orçamentos aos stakeholders para customização da plataforma (marketplace,
              e-commerce, integrações via API, etc).
              `,
              technologies: [
                "Scrum",
                "Backlog",
                "Jira",
                "Metodologia Ágil",
                "Histórias de usuário",
                "Pesquisa de mercado",
                "Gateways de pagamento",
              ],
            },
            {
              name: "Analista de Customer Growth",
              description: `
                - Responsável pelo crescimento de projetos de transformação digital dos clientes.
                - Suporte ao cliente para concretização das vendas.
                - Suporte nos treinamentos de transformação digital com o cliente.
                - Suporte a configuração do marketplace para operacionalizar ações de Marketing e
                Growth.
                - Incentivo ao engajamento dos vendedores e seus clientes no processo de transformação
                digital.
                - Participação no controle, incentivo e realização das metas de vendas (GMV).
                - Criação de insights para visualização no PowerBI.
                - Análise de KPIs para geração de insights em oportunidades de crescimento em vendas.
                - Criação de plano de ações com o objetivo de manter o cliente alinhado com as estratégias
                de Growth e transformação digital.
                - Gestão de projetos/PMO.
                - Controle de horas/budget dos serviços utilizados pelo cliente.
              `,
              technologies: [
                "Planilhas do Google",
                "PowerBI",
                "API Rest",
                "Jira",
              ],
            },
          ],
        },
        {
          name: "Pirelli Pneus",
          period: "2019 - 2020",
          roles: [
            {
              name: "Estágio de Vendas",
              description: `
              - Geração e envio das cotações de preço dos pneus mensal via SAP.
              - Geração de relatórios para análise de sell out mensal e semanal dos KTAs.
              - Envio de documentos para concorrência pública.
              - Cadastro de pneus para os setores de supermercado e e-commerce.
              - Relatório de acompanhamento de vendas dos clientes credenciados junto ao trade
              marketing.
              - Lançamentos de faturas dos fornecedores referentes a serviços à área comercial no SAP.
              - Relatório de acompanhamento de estoques vs sell out via DSI da Accera dos KTAs.
              - Benchmarking de preços e-commerce e supermercado.
              `,
              technologies: ["Excel", "VBA", "SAP"],
            },
          ],
        },
        {
          name: "IMC",
          period: "2017 - 2019",
          roles: [
            {
              name: "Assistente de Controle e Gestão",
              description: `
                Formatação de preço de novos produtos (Excel e SAP), cadastro de clientes (SAP), cadastro
                de produtos (SAP), cadastro de Registro Info (SAP), Relatórios OBZ Excel, Relatório
                Desempenho de Vendas Excel, Controle do Inventário (Excel e SAP), Atualização de Curvas
                ABC (Excel), Relatório de Repasse de produtos para contabilidade (Excel).
              `,
              technologies: ["Excel", "VBA", "SAP"],
            },
          ],
        },
        {
          name: "Softtek do Brasil",
          period: "2011 - 2016",
          roles: [
            {
              name: "Analista de Sistemas Junior",
              description:
                "Manutenção e implementação de novas funcionalidades em sistemas.",
              technologies: [
                ".NET",
                "C#",
                "Delphi",
                "Javascript",
                "CSS",
                "Bootstrap",
                "HTML",
                "Oracle",
              ],
            },
            {
              name: "Analista de Sistemas Trainee",
              description: "Analista de Sistemas Trainee",
              technologies: ["Delphi", "Oracle"],
            },
            {
              name: "Estágio de PMO",
              description: "Estágio de PMO",
              technologies: ["Excel", "VBA"],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>