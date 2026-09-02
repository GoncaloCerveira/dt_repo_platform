import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      navbar: {
        home: "Início",
        about: "Sobre",
        pilotProjects: "Projetos Piloto",
        technology: "Tecnologia",
        repository: "Repositório",
      },
      aboutDetailed: {
        subheading: "Sobre o Projeto",
        title: "Quem Somos",
        heroText: "O projeto DT4SST-CH.PT procura afirmar-se como um modelo inovador para a gestão e valorização do património cultural português. Financiado pelo Plano de Recuperação e Resiliência (PRR, medida C19-i08 \"Smart Territories\"), o consórcio é liderado pela NOVA FCT e integra a NOVA FCSH, a Universidade de Évora, a Museus e Monumentos de Portugal, E.P.E. e a Património Cultural, I.P. (PC).",
        objectiveText: "O objetivo central do projeto passa por desenvolver réplicas virtuais precisas (Gémeos Digitais) através da convergência de técnicas avançadas de digitalização 3D de alta resolução (LiDAR e fotogrametria), Heritage Building Information Modeling (HBIM), Internet das Coisas (IoT) e Inteligência Artificial (IA).",
        conservationTitle: "Conservação Preditiva e Monitorização",
        conservationParagraph1: "Uma das componentes mais inovadoras deste projeto é a integração de IoT e IA com vista à conservação preditiva. Através da instalação física de redes de sensores ligados a uma dashboard de visualização em tempo real, torna-se possível efetuar uma monitorização contínua da integridade estrutural, do ambiente e fluxo de visitantes.",
        conservationParagraph2: "Os dados recolhidos são analisados através de técnicas de machine learning, viabilizando processos de manutenção preditiva. Esta matriz confere ao património edificado uma maior resiliência face aos diversos riscos, incluindo ambientais, inundações, deterioração biológica e desgaste por microvibrações.",
        applicationTitle: "Aplicação a Todo o Património",
        applicationIntro: "A metodologia foi desenhada para atuar sob um modelo modular e escalável, desdobrando-se em duas vertentes táticas:",
        generalScopeLabel: "Âmbito Geral",
        generalScopeText: "Focado na criação do invólucro digital coerente e consolidação dos modelos 3D que servem de base aos Gémeos Digitais dos 65 museus e monumentos abrangidos no projeto nacional Património Cultural 360.",
        advancedScopeLabel: "Experimentação Avançada",
        advancedScopeText: "Integração de redes de sensores e desenvolvimento de experiências imersivas (RA/RV/RM e gamificação) em seis sítios-piloto que refletem uma multiplicidade de tipologias arquitetónicas e desafios de conservação (Mosteiro de Alcobaça, Mosteiro de Santa Clara-a-Velha, Mosteiro dos Jerónimos, Gruta do Escoural, Ruínas Romanas de Milreu e Museu Nacional do Azulejo).",
        whitePaperText: "Adicionalmente, as conclusões deste piloto nacional irão materializar-se na elaboração de um \"Livro Branco\". Este documento agregará recomendações estratégicas para orientar a adoção sustentável de Gémeos Digitais nas políticas públicas de gestão do património cultural.",
        ecosystemQuote: "O ecossistema desenhado vai além da esfera cultural, beneficiando de uma capacidade de integração transversal a todo o contexto dos Territórios Inteligentes.",
        consortiumTitle: "Consórcio",
        institutionsTitle: "Instituições",
        researchUnitsTitle: "Unidades de Investigação e Outros Parceiros",
        roles: {
          pi: "Investigador Responsável, Coordenação do Projeto"
        }
      },
      footer: {
        description: "Documentação e preservação do património através de Digital Twins.",
        linksTitle: "Links",
        contactTitle: "Contacto",
        address: "Palácio Flor da Murta, 2770-186 Paço de Arcos, Portugal",
        rights: "© 2026 NOVA FCT. TODOS OS DIREITOS RESERVADOS.",
        links: {
          nova: "Universidade NOVA de Lisboa",
          fct: "NOVA FCT",
          fcsh: "NOVA FCSH",
          uevora: "Universidade de Évora",
          mmp: "Museus e Monumentos de Portugal",
          pc: "Património Cultural",
        },
      },
      home: {
        title: "Gémeos Digitais",
        subtitle: "Para Turismo Inteligente, Sustentável e Preservação do Património Cultural",
      },
      model: {
        challengeSubheading: "O DESAFIO DO TERRITÓRIOS INTELIGENTES",
        title: "O Projeto",
        projectName: "DT4SST-CH.PT",
        paragraph1Before: "O projeto",
        paragraph1After: "propõe novos métodos de gestão e valorização do património cultural português através da criação de gémeos digitais de 65 museus e monumentos nacionais. Combinando digitalização 3D, sensores IoT, inteligência artificial e realidade aumentada, o projeto promove a preservação do património cultural, experiências turísticas imersivas e estratégias de gestão sustentável.",
        paragraph2: "O projeto contempla seis locais-piloto, que serão palco de demonstrações inovadoras que integram monitorização ambiental e narrativas interativas em ambientes de realidade mista. Culmina com a produção de um Livro Branco, que reunirá recomendações para políticas públicas e servirá de guia para a criação e adoção de gémeos digitais no setor cultural, posicionando Portugal como referência internacional em turismo inteligente e preservação patrimonial.",
        whoWeAreTitle: "Quem somos",
        moreInfoButton: "Mais Informações Sobre a Equipa",
        partners: {
          nova: "Universidade Nova de Lisboa",
          uevora: "Universidade de Évora",
          pc: "Património Cultural, I.P.",
          mmpMain: "Museus e Monumentos",
          mmpSub: "de Portugal, E.P.E.",
        },
      },
      ourProject: {
        repositorySystem: "Sistema de Repositórios",
        documentationCenter: "CENTRO DE DOCUMENTAÇÃO",
        headerSubtitle: "Repositório centralizado de aplicações, gémeos digitais e pipelines de processamento desenvolvidos no âmbito do projeto.",
        projectsCount: "Projetos",
        openAccess: "Open Access",
        activeApplications: "Aplicações Ativas",
        publicBadge: "Público",
        statusLabel: "Status",
        knowMore: "SABER MAIS",
        details: "Detalhes",
        close: "Fechar",
        projectSummary: "Resumo do Projeto",
        externalResources: "Recursos Externos",
        showcaseSub: "Digital Twin Showcase",
        showcaseTitle: "Sítios-Piloto: Modelos 3D & HBIM",
        showcaseDesc: "Levantamentos geométricos, malhas tridimensionais e dados HBIM produzidos para preservação, análise e exploração digital do património cultural.",
        resourcesCount: "Recursos",
        viewFullGallery: "Ver Galeria Completa",
        exploreModel: "Explorar Modelo",
        openLabel: "Open",
        exploreFullGalleryCardTitle: "Explorar Galeria Completa",
        exploreFullGalleryCardDesc: "Descubra a nossa coleção completa de modelos 3D, gémeos digitais e levantamentos geométricos na galeria dedicada.",
        seeMoreModels: "Ver Mais Modelos",
        footerAccessTitle: "Acesso ao Código/Modelos/Documentação",
        footerAccessDesc: "Todos os repositórios técnicos de GitHub estão disponíveis via documentação individual.",
        viewOneDriveButton: "Ver Todos os Projetos no OneDrive",
        status: {
          inDevelopment: "Em Desenvolvimento",
          finished: "Finalizado",
          research: "Pesquisa",
        },
        items: {
          p1: {
            title: "Plataforma de Monitorização Ambiental para preservação Cultural",
            description: "Plataforma cloud para monitorização ambiental de património cultural, integrando dashboards em tempo real, IoT, MQTT e análise preditiva com IA.",
          },
          p2: {
            title: "Firmware para a Plataforma de Monitorização",
            description: "Infraestrutura firmware para sensores STM32WB55 e gateways ESP32-S3 com suporte OTA, BLE, MQTT e gestão remota de dispositivos IoT.",
          },
          p3: {
            title: "Monitorização de Fluxo e Ocupação - Jerónimos",
            description: "Sistema de contagem de visitantes e mapas de calor anónimos utilizando sensores ToF e mmWave com arquitetura IoT distribuída (STM32/ESP32).",
          },
          p4: {
            title: "Segmentação de modelos 3D para HBIM",
            description: "Pipeline de segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
          },
          p5: {
            title: "HBIM Pesquisa",
            description: "Metodologias de pesquisa avançada em Heritage Building Information Modeling.",
          },
          p6: {
            title: "Desenvolvimento de HBIMs",
            description: "Modelação tridimensional IFC e mapeamento semântico de patologias a partir de nuvens de pontos e arquivos históricos.",
          },
          p7: {
            title: "Simulador do Mosteiro de Santa Clara-a-Velha",
            description: "Simulação interativa em Unity para visualização e análise comparativa de cheias históricas no Mosteiro de Santa Clara-a-Velha.",
          },
          p8: {
            title: "Aplicações AR e VR para o Museu do Azulejo",
            description: "Plataformas interativas com AR para reconhecimento de monumentos e VR para exploração imersiva de ambientes históricos através de portais.",
          },
          p9: {
            title: "Visita em realidade virtual à Gruta do Escoural",
            description: "Visualização da Gruta do Escoural baseada em captação 3D, navegável em tempo real.",
          },
          p10: {
            title: "Reconstrução virtual das Ruínas Romanas de Milreu",
            description: "Reconstrução virtual das Ruínas Romanas de Milreu em 3D, desenvolvida no Blender a partir de referências históricas e arqueológicas.",
          },
          p11: {
            title: "Desenvolvimento de UX e UI para os projetos do Digital Twins",
            description: "Processo e desenvolvimento de UX e UI para os projetos do Digital Twins.",
          },
        },
        pilots: {
          type: "Modelos & Mesh",
          p1: { name: "P1 - Mosteiro de Santa Clara-a-Velha", location: "Coimbra" },
          p2: { name: "P2 - Ruínas Romanas de Milreu", location: "Faro" },
          p3: { name: "P3 - Mosteiro dos Jerónimos", location: "Lisboa" },
          p4: { name: "P4 - Mosteiro de Alcobaça", location: "Alcobaça" },
          p5: { name: "P5 - Museu Nacional do Azulejo", location: "Lisboa" },
          p6: { name: "P6 - Gruta do Escoural", location: "Alentejo" },
        },
      },
      ourProjectPublic: {
        sectionTag: "Projetos Piloto e Mais",
        title: "MAIS DO QUE APENAS UM PROJETO",
        description: "Os seis locais emblemáticos escolhidos como locais-piloto são Santa Clara-a-Velha, as Ruínas Romanas de Milreu, o Mosteiro dos Jerónimos, o Mosteiro de Alcobaça, o Museu Nacional do Azulejo e a Gruta do Escoural. Mas não ficámos por aqui. O projeto continua a expandir-se, mapeando e integrando uma rede de património muito mais vasta.",
        ctaTitle: "Descubra Todos os Locais do Territórios Inteligentes",
        ctaDescription: "Explore o nosso catálogo completo de gémeos digitais de monumentos e museus.",
        ctaButton: "Ver todos os locais",
        boards: {
          tags: {
            p1: "Piloto 01",
            p2: "Piloto 02",
            p3: "Piloto 03",
            p4: "Piloto 04",
            p5: "Piloto 05",
            p6: "Piloto 06",
          },
          mscv: {
            title: "Mosteiro de Santa Clara-a-Velha",
            description: "Representa um momento de experimentação do estilo gótico no país.",
          },
          mnaz: {
            title: "Museu Nacional do Azulejo",
            description: "O Museu Nacional do Azulejo, em Lisboa, é um dos mais importantes museus de Portugal, pela sua colecção singular, dedicada ao azulejo.",
          },
          ma: {
            title: "Real Mosteiro de Santa Maria de Alcobaça",
            description: "É a primeira obra plenamente gótica erguida em solo português, tendo sido começada a sua construção em 1178 pelos monges da Ordem de Cister.",
          },
          rrm: {
            title: "Ruínas Romanas de Milreu",
            description: "As Ruínas romanas de Milreu ou Ruínas de Estói são um importante conjunto arqueológico em Estói, no município de Faro, em Portugal.",
          },
          mj: {
            title: "Mosteiro dos Jerónimos",
            description: "Situa-se na freguesia de Belém, na cidade e concelho de Lisboa.",
          },
          ge: {
            title: "Gruta do Escoural",
            description: "Está classificada como Monumento Nacional desde 1963.",
          },
        },
      },
      board: {
        knowMore: "Saber Mais",
      },
      navbarRepository: {
        home: "Início",
        projectsButton: "Projetos",
        mobileProjectsHeading: "Nossos Projetos",
        projects: {
          santaClara: "Santa Clara-a-Velha",
          azulejo: "Museu Nacional do Azulejo",
          escoural: "Gruta do Escoural",
          hbimResearch: "Pesquisa HBIM",
          hbimSegmentation: "Segmentação HBIM",
          milreuReconstruction: "Reconstrução Milreu",
          sensorPlatform: "Plataforma Sensores",
          sensorFirmware: "Firmware Sensores",
          visitorFlow: "Fluxo de Visitantes - Jerónimos",
          modelGallery: "Galeria de Modelos",
        },
      },
      pilotDetail: {
        backButton: "Voltar",
        resultsHeading: "Resultados do Projeto",
      },
      pilots: {
        alcobaca: {
          tag: "Piloto 03",
          description:
            "O Mosteiro de Alcobaça, também conhecido como Real Mosteiro de Santa Maria de Alcobaça, é um mosteiro situado na cidade de Alcobaça, na região Oeste portuguesa. É a primeira obra plenamente gótica erguida em solo português, tendo sido começada a sua construção em 1178 pelos monges da Ordem de Cister.",
          results: [
            "Levantamento com LiDAR terrestre de alta densidade (Leica RTC 360), fotogrametria aérea e terrestre, e múltiplos pontos de digitalização distribuídos",
            "Modelação HBIM, abrangendo o desenvolvimento do gémeo digital, a integração de metadados históricos e a identificação detalhada de elementos arquitetónicos",
            "O projeto piloto centra-se na otimização da gestão arquitetónica e manutenção preventiva, utilizando a monitorização ambiental e dados IoT para garantir a conservação do património",
          ],
        },
        azulejo: {
          tag: "Piloto 02",
          description:
            "O Museu Nacional do Azulejo, em Lisboa, é um dos mais importantes museus de Portugal, pela sua colecção singular, dedicada ao azulejo, expressão artística diferenciadora da cultura portuguesa, e pelo edifício ímpar em que se encontra instalado, o antigo Convento da Madre de Deus, fundado em 1509 pela rainha D. Leonor.",
          results: [
            "Modelo 3D da Sala Santos Simões: nuvem de pontos e modelo texturizado",
            "Testes de aplicações de Realidade Virtual e Realidade Aumentada",
          ],
        },
        gruta: {
          tag: "Piloto 06",
          description:
            "A Gruta do Escoural é uma cavidade natural conhecida pela arte rupestre paleolítica e enterros, localizada na aldeia de S. Brissos, município alentejano de Montemor-o-Novo, em Portugal. Está classificada como Monumento Nacional desde 1963.",
          results: [
            "Criação de modelos 3D do exterior e interior da Gruta do Escoural, incluindo nuvens de pontos e respetivas malhas (mesh)",
            "Integração de dados provenientes de visitas virtuais (Heritage 360) com capturas de LiDAR terrestre e aéreo",
            "Foco na monitorização de parâmetros ambientais e na análise de riscos biológicos",
          ],
        },
        jeronimos: {
          tag: "Piloto 05",
          description:
            "O Mosteiro de Santa Maria de Belém, mais conhecido como Mosteiro dos Jerónimos, é um mosteiro português, mandado construir no final do século XV pelo rei D. Manuel I e estava entregue à Ordem de São Jerónimo. Situa-se na freguesia de Belém, na cidade e concelho de Lisboa.",
          results: [
            "Levantamento detalhado de interiores e exteriores através de fotogrametria aérea e terrestre para a geração de nuvens de pontos de alta densidade",
            "Desenvolvimento de gémeos digitais e foco na otimização de gestão de fluxos e mitigação de impactos ambientais",
            "Integração de sensores IoT para monitorização ambiental contínua e validação dos resultados com gestores e visitantes",
          ],
        },
        milreu: {
          tag: "Piloto 04",
          description:
            "As Ruínas romanas de Milreu ou Ruínas de Estói são um importante conjunto arqueológico em Estói, no município de Faro, em Portugal. É composto principalmente pela abastada villa romana de Sambada ou Sambata, com termas anexas, e os vários edíficios em redor, incluindo um templo, mausoléus e diversas estruturas industriais e comerciais.",
          results: [
            "Capturas aéreas e terrestres (fotogrametria + LiDAR) concluídas",
            "Gêmeo digital modelado em 3D",
            "Reconstrução digital de elementos arquitetônicos (dissertação de mestrado)",
            "Sobreposição do modelo de reconstrução no gêmeo digital",
            "Aplicativo de Realidade Aumentada para leitura arqueológica ao ar livre",
          ],
        },
        santaClara: {
          tag: "Piloto 01",
          description:
            "O Mosteiro de Santa Clara de Coimbra, popularmente conhecido como Convento de Santa Clara-a-Velha, localiza-se na margem esquerda do rio Mondego, freguesia de Santa Clara e Castelo Viegas, na cidade, município e distrito de Coimbra, em Portugal. Representa um momento de experimentação do estilo gótico no país.",
          results: [
            "Capturas de fotogrametria aérea e terrestre e LiDAR concluídas",
            "Modelagem completa de gêmeos digitais",
            "Simulação histórica de inundações em desenvolvimento",
            "Sobreposição de cenários de inundação com dados históricos",
            "Análise do impacto das inundações no abandono do edifício",
          ],
        },
      },
      login: {
        badge: "Digital Twin Repository",
        title: "Iniciar Sessão",
        subtitle:
          "Aceda ao centro de documentação centralizado de aplicações, gémeos digitais e pipelines de processamento.",
        usernameLabel: "utilizador",
        usernamePlaceholder: "Ex: admindt, tester",
        passwordLabel: "palavra-passe",
        submitButton: "Iniciar Sessão",
        actionText: "Aceder",
        invalidCredentials:
          "Credenciais inválidas. Verifique o utilizador e a palavra-passe.",
      },
      technology: {
        sectionBadge: "Tecnologias",
        title: "Ferramentas e Aplicações",
        description:
          "Esta secção reúne as ferramentas e aplicações em desenvolvimento no âmbito do projeto, traduzindo a investigação científica em soluções tecnológicas. Aqui encontrará os nossos desenvolvimentos em IoT, modelação 3D, realidade imersiva e análise preditiva aplicadas ao setor cultural.",
        stats: {
          projects: "Projetos",
          openAccess: "Open Access",
        },
        actions: {
          learnMore: "SABER MAIS",
          details: "Detalhes",
          close: "Fechar",
        },
        detailsSummary: "Resumo do Projeto",
        externalResources: "Recursos Externos",
        projects: {
          iotPlatform: {
            title: "Plataforma de Monitorização Ambiental para preservação Cultural",
            description:
              "Plataforma cloud para monitorização ambiental de património cultural, integrando dashboards em tempo real, IoT, MQTT e análise preditiva com IA.",
            tag: "Plataforma IoT",
          },
          iotFirmware: {
            title: "Firmware para a Plataforma de Monitorização",
            description:
              "Infraestrutura firmware para sensores STM32WB55 e gateways ESP32-S3 com suporte OTA, BLE, MQTT e gestão remota de dispositivos IoT.",
            tag: "Firmware & Sensores",
          },
          visitorFlow: {
            title: "Monitorização de Fluxo e Ocupação - Jerónimos",
            description:
              "Sistema de contagem de visitantes e mapas de calor anónimos utilizando sensores ToF e mmWave com arquitetura IoT distribuída (STM32/ESP32).",
            tag: "IoT & Edge Computing",
          },
          hbimSegmentation: {
            title: "Segmentação de modelos 3D para HBIM",
            description:
              "Pipeline de segmentação automática de elementos arquitetónicos em nuvens de pontos 3D.",
            tag: "Processamento de Dados",
          },
          hbimSearch: {
            title: "HBIM Pesquisa",
            description:
              "Metodologias de pesquisa avançada em Heritage Building Information Modeling.",
            tag: "Processamento de Dados",
          },
          hbimDev: {
            title: "Desenvolvimento de HBIMs",
            description:
              "Modelação tridimensional IFC e mapeamento semântico de patologias a partir de nuvens de pontos e arquivos históricos.",
            tag: "Processamento de Dados",
          },
          santaClaraSimulator: {
            title: "Simulador do Mosteiro de Santa Clara-a-Velha",
            description:
              "Simulação interativa em Unity para visualização e análise comparativa de cheias históricas no Mosteiro de Santa Clara-a-Velha.",
            tag: "Experiências Imersivas",
          },
          azulejoXR: {
            title: "Aplicações AR e VR para o Museu do Azulejo",
            description:
              "Plataformas interativas com AR para reconhecimento de monumentos e VR para exploração imersiva de ambientes históricos através de portais.",
            tag: "XR Imersivo",
          },
          escouralVR: {
            title: "Visita em realidade virtual à Gruta do Escoural",
            description:
              "Visualização da Gruta do Escoural baseada em captação 3D, navegável em tempo real.",
            tag: "Experiências Imersivas",
          },
          milreu3D: {
            title: "Reconstrução virtual das Ruínas Romanas de Milreu",
            description:
              "Reconstrução virtual das Ruínas Romanas de Milreu em 3D, desenvolvida no Blender a partir de referências históricas e arqueológicas.",
            tag: "Experiências Imersivas",
          },
          uxUiProjects: {
            title: "Desenvolvimento de UX e UI para os projetos do Digital Twins",
            description:
              "Processo e desenvolvimento de UX e UI para os projetos do Digital Twins.",
            tag: "Experiências Imersivas",
          },
        },
      },
      technologyPages: {
        actions: {
          back: "Voltar",
        },
        deployment: {
          title: "Plataforma de Monitorização Ambiental para preservação Cultural",
          subtitle: "Plataforma de Monitorização IoT",
          paragraphs: [
            "O projecto encontra-se a desenvolver uma plataforma cloud para a monitorização ambiental de espaços patrimoniais e culturais, permitindo a recolha, armazenamento e análise contínua de dados provenientes de gateways IoT e sensores distribuídos pelo espaço monitorizado.",
            "A plataforma integra dashboards em tempo real, visualização de séries temporais, mapas interativos, configuração remota de dispositivos e sistemas automáticos de alertas ambientais. O sistema suporta comunicação via MQTT e HTTPS, garantindo redundância e fiabilidade na transmissão dos dados.",
            "Para além da monitorização ambiental, o projeto incorpora ferramentas de inteligência artificial para deteção de anomalias, análise preditiva e apoio ao diagnóstico de conservação preventiva. A infraestrutura foi desenvolvida com Firebase, Google Cloud Run, Firestore e Vertex AI, permitindo elevada escalabilidade e integração com dispositivos IoT de baixo consumo energético."
          ]
        },
        firmware: {
          title: "Firmware para a Plataforma de Monitorização",
          subtitle: "Firmware e Infraestrutura IoT",
          paragraphs: [
            "O projeto Metrozero Firmware reúne o conjunto de firmwares utilizados na infraestrutura IoT do sistema Metrozero, incluindo sensores ambientais baseados em STM32WB55 e gateways ESP32-S3 responsáveis pela recolha e sincronização dos dados ambientais.",
            "O sistema suporta atualizações OTA (Over-The-Air), comunicação BLE entre sensores e gateway, armazenamento local em cartão SD e sincronização cloud através de MQTT e HTTPS. A arquitetura foi desenvolvida para cenários de monitorização contínua em património cultural e espaços museológicos.",
            "Para além do firmware principal, o projeto inclui procedimentos completos de flashing, bootloaders, stacks BLE, configuração de memória e documentação de deployment em ambiente real. O sistema foi implementado em campanhas de monitorização nos Jerónimos, suportando múltiplos sensores em simultâneo com gestão remota e atualizações automáticas."
          ]
        },
        escoural: {
          title: "Visita em realidade virtual à Gruta do Escoural",
          subtitle: "Experiências Imersivas",
          paragraphs: [
            "Visualização imersiva da Gruta do Escoural, baseada num modelo captado com recurso a fotogrametria e laser-scanning. Com recurso a um motor de jogo, o modelo da gruta é iluminado em tempo real de forma foto-realística e os utilizadores podem explorar as diferentes áreas de forma interativa numa perspetiva de primeira pessoa."
          ]
        },
        hbim: {
          title: "Desenvolvimento de HBIMs",
          subtitle: "Processamento e Demonstração de Dados: Jerónimos e Santa Clara-a-Velha",
          paragraphs: [
            "No âmbito deste projeto, foi desenvolvida uma metodologia de modelação HBIM (Historic Building Information Modeling) e documentação de patologias focada nos casos de estudo do Mosteiro dos Jerónimos e do Mosteiro de Santa Clara-a-Velha. O processo assenta na utilização de nuvens de pontos tridimensionais georreferenciadas como referência métrica fundamental, permitindo a construção e deformação de elementos-tipo paramétricos (paredes, vigas, pilares) até uma aproximação rigorosa das superfícies reais dos edifícios.",
            "Para o Mosteiro de Santa Clara-a-Velha, converteu-se o extenso arquivo vetorial DWG (1998-2008) diretamente em elementos IFC tridimensionais via scripts Python (ifcopenshell), preservando a classificação por camadas e criando um registo semântico de danos e intervenções. Já no Mosteiro dos Jerónimos, processaram-se levantamentos gráficos raster de 1999 através da extração e classificação automática de tramas de patologia por filtros de textura e projeção de raios sobre o modelo 3D, gerando anotações semânticas normalizadas segundo as taxonomias HeritageCare e Damage Ontology.",
            "Todos os modelos IFC e os seus metadados (incluindo mais de 150 documentos históricos e relatórios) estão integrados num grafo de conhecimento e numa plataforma de visualização web aberta. O sistema democratiza o acesso ao registo patrimonial através de qualquer navegador, permitindo consultas espaciais, interrogações SPARQL e novos fluxos de trabalho de conservação — desde a anotação de danos in situ via mobile até à exportação de tópicos BCF para gestão de obras."
          ]
        },
        milreu: {
          title: "Reconstrução Ruínas Romanas de Milreu",
          subtitle: "Experiências Imersivas",
          paragraphs: [
            "A reconstrução de Milreu parte da recolha documental de referências históricas e arqueológicas para o levantamento do espaço. O projeto pretende a construção de vários espaços das Ruínas Romanas de Milreu (RRM), tanto no exterior como no interior. Isto, com o objetivo de aprimorar a experiência dos visitantes proporcionando uma experiência que permita uma melhor exploração do espaço, maior envolvência do público e, também, uma mediação museológica que permita valorizar ainda mais o seu valor histórico, artístico e cultural.",
            "Para o efeito, realizam-se as reconstruções tridimensionais através do Blender, uma aplicação open source, que permite a criação dos modelos 3D, atribuição de texturas e criação de animações. O programa facilita, também, a importação de modelos tridimensionais de objetos que foram digitalizados no projeto Património 360º e que integraram as RRM, bem como, a exportação de imagens renderizadas para infografias e criação de materiais audiovisuais.",
            "Para além das imagens disponíveis, é possível consultar o modelo tridimensional no Blender. Deverá ser instalada a versão mais recente do programa e abrir o documento em anexo."
          ]
        },
        santaClara: {
          title: "Mosteiro de Santa Clara-a-Velha",
          subtitle: "Simulação de cheias",
          paragraphs: [
            "Simulação Unity para visualizar, explorar e demonstrar como diferentes cheias históricas inundaram o Mosteiro de Santa Clara-a-Velha. Permite ver o nível da água para anos específicos e comparar eventos ao longo do tempo.",
            "A simulação mostra uma cena 3D com a superfície de água que sobe e baixa de acordo com o ano; painel de controlo com botões para escolher anos, descrição do evento e um slider para ajustar o nível de água dentro do intervalo daquele ano.",
            "É possível escolher um ano clicando no botão do ano no menu ou premindo teclas numéricas (1..9 e 0 para o 10.º). O slider ajusta o nível de água e a cena atualiza em tempo real."
          ]
        },
        segmentation: {
          title: "Segmentação para HBIMs",
          subtitle: "Integração Semântica e Enriquecimento",
          paragraphs: [
            "Esta pipeline foca-se na automação da captura de dados através da abordagem 'Scan-to-BIM'. O processo inicia-se com a Segmentação 2D, onde utilizamos o modelo SAM3 (Segment Anything Model) assistido por prompts de classes. Para melhorar a precisão, integrámos um LLM Multimodal que filtra ruído e melhora a inferência de materiais, permitindo identificar artefactos específicos com base no acervo visual do museu.",
            "Na segunda fase, ocorre a Projeção de Rótulos para a Nuvem de Pontos. Através dos parâmetros intrínsecos e extrínsecos da câmara, projetamos os rótulos das máscaras 2D diretamente nos pontos 3D. A consistência semântica da nuvem é garantida por um processo de fusão multi-vista baseado em 'majority voting', que resolve discrepâncias entre diferentes perspetivas fotográficas.",
            "Finalmente, procedemos à Geração do Modelo HBIM (Heritage Building Information Modeling). A nuvem de pontos segmentada é limpa e simplificada para otimização de performance, agrupando classes em formas geométricas fundamentais. O resultado é um Digital Twin rigoroso em formato BIM, que inclui relações espaciais complexas (IFCRelations) e metadados métricos precisos para a gestão do edíficio."
          ]
        },
        uxUi: {
          title: "Desenvolvimento de UX e UI para os projetos do Digital Twins",
          subtitle: "Experiência e Interface do Utilizador",
          paragraphs: [
            "O processo de desenvolvimento da experiência do utilizador (UX) e da interface do utilizador (UI) começou com a compreensão dos objetivos do projeto. Isto foi feito junto da equipa do Digital Twins e dos responsáveis pelos Monumentos. Após serem assinalados os principais objetivos para ambas as partes, teve se em consideração o público-alvo e as outras condicionantes do projeto.",
            "Foram então desenvolvidos diversos user-flows que tentaram responder às problemáticas indicadas e à criação de uma boa experiência para os utilizadores desde o primeiro momento.",
            "Depois destes percursos definidos começou se a dar materialização aos mesmos através de wireframes e protótipos de baixa fidelidade para se poder perceber e melhorar as soluções propostas. Estes protótipos também serviram de ponte entre a conceptualização e a implementação final. Num dos projetos foi ainda feito um estudo de utilizadores para poder dar ainda mais contexto e melhorias à proposta.",
            "Depois da experiência definida começou o processo de trazer estas soluções para a realidade. Para isto teve se em consideração as soluções e as condicionantes que daí advinham assim como o local de utilização destas aplicações. Tentou-se então criar uma materialização que fosse facilmente reconhecida, coerente, que remetesse para materiais reais e, por fim, que fizesse sentido com o contexto de cada parte do projeto. Nesta fase acrescentou-se se mais partes do projeto e foi mais uma vez necessário perceber os seus contextos.",
            "Começou-se por definir, para cada uma das aplicações, uma palete de cores e fontes a serem utilizadas. Foram então definidos e organizados todos os elementos interativos que cada aplicação necessitaria assim como o layout de cada página principal das diversas aplicações. Depois de definidos foram padronizados para manterem uma linguagem coerente dentro de cada aplicação.",
            "Por fim foram criados diversos guias de implementação para ajudar os colegas responsáveis pela implementação final a corretamente aplicarem os elementos gráficos criados."
          ]
        },
        visitorFlow: {
          title: "Monitorização de Fluxo e Ocupação - Mosteiro dos Jerónimos",
          subtitle: "IoT, Edge Computing & Privacidade",
          paragraphs: [
            "Este projeto foca-se na monitorização inteligente do fluxo de visitantes no Mosteiro dos Jerónimos, assente num princípio rigoroso de 'Privacy by Design'. A solução utiliza sensores Time-of-Flight (VL53L1X) e mmWave de 24 GHz para capturar métricas de ocupação sem nunca recolher imagens faciais, identidades ou identificadores de dispositivos móveis. A infraestrutura de firmware foi desenhada para microcontroladores STM32WB55, garantindo o processamento local (Edge) dos dados antes do envio de agregados anónimos.",
            "O subsistema de contagem implementa uma lógica de sensores duplos ToF com uma frequência de amostragem de 20 Hz. Para garantir a precisão, os sinais passam por um filtro de mediana e uma máquina de estados que valida a direção do movimento (In/Out) com base em diferenciais temporais (tA < tB). O algoritmo inclui períodos refratários de 1200ms e timeouts de direção para filtrar eventos espúrios, permitindo uma gestão de ocupação em tempo real com baixo consumo energético e alta fiabilidade em zonas de passagem.",
            "Para a geração de Mapas de Calor Anónimos, integrámos radares mmWave via UART que mapeiam a presença humana numa grelha de 12 células (4x3). Através de um filtro EMA (Exponential Moving Average) com alpha de 0.35, o sistema suaviza flutuações de sinal e identifica zonas de maior permanência. Os dados são agregados em janelas de 30 segundos e transmitidos via gateways ESP32-S3 através de protocolos MQTT e BLE, suportando gestão remota e atualizações OTA (Over-the-Air) para manutenção da rede de sensores."
          ]
        },
        search: {
          title: "Pesquisa para HBIMs",
          subtitle: "Extração de Informação HBIM e Consulta Conversacional",
          paragraphs: [
            "Este projeto é uma ferramenta para consultar e explorar modelos digitais de edifícios através de uma interface conversacional. Em vez de obrigar o utilizador a navegar manualmente por ficheiros BIM/HBIM complexos, a aplicação permite fazer perguntas em linguagem natural sobre os elementos do modelo, como paredes, escadas, materiais, pisos, classificações ou quantidades.",
            "A solução transforma a informação técnica do modelo num formato pesquisável e depois disponibiliza-a através de um assistente. O utilizador pode, por exemplo, pedir listas de elementos, fazer perguntas sobre características específicas, obter contagens por tipo de elemento ou material, e pedir mais detalhes sobre um resultado encontrado.",
            "No geral, o projeto procura tornar a informação BIM mais acessível, rápida de consultar e útil para análise. É especialmente relevante para contextos de arquitetura, engenharia, património construído e gestão de edifícios, onde existe muita informação técnica associada aos modelos, mas nem sempre é fácil encontrá-la ou interpretá-la diretamente."
          ]
        },
        azulejo: {
          title: "AR e VR - Museu Nacional do Azulejo",
          subtitle: "Experiências Imersivas para Turismo",
          experienceTab: "Experiência {{type}}",
          vrSubtitle: "Realidade Virtual — Visualização dos espaços onde os Azulejos já estiveram",
          vrParagraphs: [
            "O projeto de VR para o museu do azulejo utiliza portais para conectar ambientes que estão em camadas diferentes (no unity associamos layers para esconder ou mostrar ambientes virtuais)",
            "O projeto conta com 3 scenes:\n- Hedge App Scene - Contem a aplicação com a visita prolongado do museu, com os vários textos dos azulejos, e acesso através de portais para 3 modelos: jardim das amoreiras, palácio das Galveias e igreja são Lourenço.\n- Quick Version - Igual a Hedge App Scene, mas sem o texto dos azulejos, focando-se só na transição entre ambientes\n- Sample Scene - Scene de testes",
            "O projeto usa também o meta sdk para fazer a integração com os oculus meta quest 3S, usando tecnologia como o teleporte com gestos de mão ou comandos para locomover-se no ambiente."
          ],
          arSubtitle: "Realidade Aumentada — Deteção de imagens dos monumentos do panorama de Lisboa",
          arParagraphs: [
            "Aplicação feita em Unity para reconhecimento de imagens de monumentos do panorama de Lisboa no Museu Nacional do Azulejo, para mostrar a informação dos azulejos que estiveram nesses monumentos.",
            "A aplicação utilizado o AR Foundation (package do unity) para fazer o reconhecimento de imagens. O projeto tem uma biblioteca de imagens do panorama, que quando são reconhecidas instanciam elementos de UI para o utilizador interagir e ver a informação sobre o monumento reconhecido.",
            "O projeto contém 3 scenes: \nImageTracking - Tirada da documentação do AR Foundation, tem um exemplo prático de como funciona o image tracking,\nMNAz - Scene principal onde está feito o reconhecimento de imagens do panorama de Lisboa,\nSampleScene - Scene de teste"
          ]
        }
      },
      projectDetail: {
        back: "Voltar",
        aboutProject: "Sobre o Projeto",
        mediaAlt: "Mídia do projeto",
      },
      repositoryDetail: {
        back: "Voltar",
        aboutRepo: "Sobre o Repositório",
        stars: "Estrelas",
        forks: "Forks",
        openIssues: "Issues Abertas",
        license: "Licença",
        technologies: "Tecnologias",
        viewOnGithub: "Ver no GitHub",
        mediaAlt: "Mídia do repositório",
        noLicense: "Nenhuma licença especificada",
      },
      locations: {
        subheading: "Territórios Inteligentes",
        title: "TODOS OS GÉMEOS DIGITAIS",
        intro: "Explore a nossa rede completa de património. Clique em qualquer um dos locais abaixo para descobrir mais informações, detalhes históricos e visitar o website oficial.",
        searchPlaceholder: "Pesquisar por nome ou detalhe...",
        resultsLabel: "Locais Encontrados",
        backButton: "Voltar",
        emptyTitle: "Nenhum local encontrado",
        emptyText: "Não encontrámos resultados para \"{{term}}\". Tente usar outros termos.",
        detailsLabel: "Detalhes do Local",
        noDescription: "Descrição detalhada não disponível para este local no momento.",
        visitWebsite: "Visitar Website Oficial",
        items: {
          "casa-corpo-santo": {
            name: "Casa do Corpo Santo",
            description: "A Casa do Corpo Santo é um edifício onde esteve instalada a Confraria do Corpo Santo, cuja origem remonta ao século XIV, com compromisso de 1340. Em 1714, data gravada sobre o lintel do portão do pátio, a confraria instalou-se neste edifício, composto por algumas salas cedidas do Palácio da Família Cabedo, encostado à muralha do século XIV e implantado numa área com ocupação antiga da cidade de Setúbal, concretamente o Largo da Igreja de Santa Maria, sobranceiro ao morro de Santa Maria.",
          },
          "casa-museu-anastacio-goncalves": {
            name: "Casa Museu Dr. Anastácio Gonçalves",
            description: "A Casa-Museu Dr. Anastácio Gonçalves é um espaço museológico da cidade de Lisboa onde se expõe o acervo reunido pelo médico e colecionador António Anastácio Gonçalves. O conjunto, com cerca de 3 mil obras, compõe-se de três grandes núcleos: pintura portuguesa dos séculos XIX e XX, porcelana chinesa e mobiliário português e estrangeiro. Existem ainda importantes núcleos de ourivesaria civil e sacra, pintura europeia, escultura portuguesa, cerâmica europeia, têxteis, numismática, medalhística, vidros e relógios de bolso de fabrico suíço e francês.",
          },
          "castelo-elvas": {
            name: "Castelo de Elvas",
            description: "Situado no ponto mais elevado da cidade, o Castelo de Elvas é uma obra de fortificação islâmica, reconstruída nos séculos XIII e XIV, tomando só no séc. XVI o aspeto atual. Acolhia o alcaide de Elvas e foi palco de importantes acontecimentos da história do país como tratados de paz, trocas de princesas e banquetes de casamentos reais. Vários elvenses amantes da história e do património quiseram promover o seu restauro, a sua visibilidade e entabularam um processo que faria do Castelo de Elvas, em 1906, o primeiro Monumento Nacional português.",
          },
          "castelo-guimaraes": {
            name: "Castelo de Guimarães",
            description: "Paradigma das origens da nacionalidade e da própria figura de D. Afonso Henriques, o Castelo de Guimarães é um dos monumentos mais representativos do imaginário medieval português. A sua construção inicial remonta ao tempo de Mumadona Dias, que o mandou edificar em meados do século X, com o objetivo de defender o Mosteiro de Santa Maria de Guimarães dos ataques de muçulmanos e normandos. Esse primitivo castelo, encaixado entre os afloramentos graníticos, deve ter sido erguido em madeira e dele poucos vestígios nos restam.",
          },
          "castelo-viana-alentejo": {
            name: "Castelo de Viana do Alentejo",
            description: "Ao doar carta de foral a Viana do Alentejo em 1313 D. Dinis mandou edificar a \"cerca de muro em que seia a villa de quatrocentas braças\" na qual teriam que ser rasgadas três portas, doando para a obra mil libras (PAIS, 2004, p. 134). A estrutura do castelo é constituída por cinco panos de muralhas, rematados nos vértices por torreões cilíndricos cobertos por coruchéus. O coruchéu que remata a torre de menagem é mais alto que os restantes, albergando uma sineira com aberturas em todas as faces.",
          },
          "citania-santa-luzia": {
            name: "Citânia de Santa Luzia",
            description: "A Citânia impõe-se estrategicamente na paisagem pela sua localização destacada. A área do povoado corresponde a cerca de um terço do que seria a sua verdadeira dimensão. Está delimitado por três linhas de muralha, complementadas por torreões e dois fossos. A distribuição das estruturas permite aferir momentos distintos de ocupação, podendo enquadrar a reestruturação do espaço entre o séc. I a.C. e o séc. I d.C.",
          },
          "convento-cristo": {
            name: "Convento de Cristo",
            description: "Convento de Cristo é o nome pelo qual é geralmente conhecido o conjunto monumental constituído pelo Castelo Templário de Tomar, o renascentista Convento da Ordem de Cristo, a cerca conventual, hoje conhecida por Mata dos Sete Montes, a Ermida da Imaculada Conceição e o aqueduto conventual, também conhecido por Aqueduto dos Pegões. Inscrito na Lista de Património Mundial da UNESCO em 1983, integra alguns dos mais expressivos testemunhos da história da arquitetura portuguesa. Os sete séculos da sua construção percorrem os momentos mais significativos da História de Portugal.",
          },
          "convento-jesus": {
            name: "Convento de Jesus",
            description: "Museu inaugurado a 5 de fevereiro de 1961, na época enquanto “Museu da Cidade”, o equipamento foi gerido até 1977 pelo engenheiro João Botelho Moniz Borba, que inicialmente, na figura de provedor da Misericórdia, propusera às entidades estatais a conversão para museu do antigo convento de Jesus, que funcionara como Hospital do Espírito Santo desde 1893.",
          },
          "convento-s-salvador-vilar-frades": {
            name: "Convento de S. Salvador de Vilar de Frades",
            description: "Do primeiro mosteiro beneditino fundado no séc. XI restam parcos elementos românicos. Em 1425 é fundada e aqui sedeada uma congregação de cónegos seculares (Lóios). O conjunto foi renovado entre o séc. XVI e XIX, sendo de assinalar, no corpo da igreja, notáveis abóbadas nervuradas manuelinas e, no mesmo estilo, o belo portal principal. Do período barroco é o retábulo-mor da igreja e valiosos azulejos do século XVIII.",
          },
          "convento-sao-bento-castris": {
            name: "Convento de São Bento de Cástris",
            description: "Erigido sobre uma singela ermida dedicada a S. Bento, construída em 1169, o Convento cisterciense de São Bento de Castris, uma das mais antigas casas religiosas femininas em Portugal, remonta ao século XIV, tendo a igreja sido consagrada no ano de 1328.",
          },
          "estacao-arqueologica-freixo": {
            name: "Estação Arqueológica do Freixo - Tongóbriga",
            description: "Durante muito tempo se pensou que Tongobriga deveria ser uma fundação da época do Imperador Augusto (27 a.C. – 14 d.C.). Como tal, teria sido criada nos últimos anos antes do início da era cristã. Com efeito, são muito escassos e pouco visíveis os vestígios anteriores. Porém, na sequência dos trabalhos ultimamente desenvolvidos, sabemos hoje que existem indícios de uma ocupação sedentária na base da encosta Sul do povoado desde, pelo menos, a Idade do Bronze, cerca do séc. XV a.C.. ",
          },
          "igreja-sao-miguel-castelo": {
            name: "Igreja de São Miguel do Castelo",
            description: "Uma corrente historiográfica nacionalista perpetuou a lenda de que foi nesta Igreja que teve lugar o batismo de D. Afonso Henriques. Esta mesma lenda, ao exaltar a sua ancestralidade, recuava também a datação do templo que atualmente subsiste. Por esta via, a tardo-românica Igreja de São Miguel teria feito parte do primitivo complexo palatino de D. Mumadona Dias, na viragem do século IX para o X, e teria permanecido como principal templo da Guimarães condal, ao tempo de D. Henrique e de D. Teresa.",
          },
          "mosteiro-sta-maria-pombeiro": {
            name: "Mosteiro de Sta. Maria de Pombeiro",
            description: "Santa Maria de Pombeiro foi um dos mais importantes mosteiros beneditinos do Entre-Douro-e-Minho, tendo sido fundado por D. Gomes Echiegues e sua mulher Gontroda, em 1102. A Igreja [séculos XII-XIII] é composta por três naves, divididas por arcos-diafragma e com cobertura em madeira pintada, nas naves laterais. A planta original da capela-mor, reconstruída no século XVIII, era semicircular à boa maneira românica, assim como os absidíolos [capelas secundárias] ainda existentes.",
          },
          "mosteiro-jeronimos": {
            name: "Mosteiro dos Jerónimos",
            description: "Obra-prima da arquitetura portuguesa, o Real Mosteiro de Santa Maria de Belém, designado comumente por Mosteiro dos Jerónimos, por ter sido destinado à Ordem de São Jerónimo, está classificado como Monumento Nacional desde 1907 e foi inscrito na Lista do Património Mundial da UNESCO em 1983. A igreja, com serviço religioso e horário para visitas patrimoniais, e o claustro, secularizado no século XIX, formam o conjunto patrimonial mais visitado do país.",
          },
          "mosteiro-sao-martinho-tibaes": {
            name: "Mosteiro São Martinho de Tibães",
            description: "Nos inícios do segundo milénio, passados que foram a romanização e a ocupação suevo-visigótica, os monges beneditinos provenientes de Cluny, amparados pelos reis de Leão e Castela e pelo incentivo papal, foram fundando mosteiros por entre Douro e Minho, substituindo os velhos cenóbios e impondo a liturgia romana. É neste quadro que se integra, entre 1070 e 1077, a criação do primitivo Mosteiro de Tibães, dedicado a São Martinho de Tours que, nascido na Panónia (Hungria) talvez em 317, foi prolífico fundador de mosteiros e bispo de Tours.",
          },
          "museu-arte-popular": {
            name: "Museu Arte Popular",
            description: "Inaugurado em 1948, o Museu de Arte Popular nasceu da reformulação do antigo pavilhão da Secção da Vida Popular criado para a Exposição do Mundo Português de 1940, com projeto da autoria dos arquitetos António Reis Camelo e João Simões. ",
          },
          "museu-alberto-sampaio": {
            name: "Museu de Alberto Sampaio",
            description: "Inaugurado em 1931, o Museu de Alberto Sampaio situa-se em pleno centro histórico de Guimarães, declarado Património Mundial em 2001, no local onde no século X a condessa Mumadona Dias mandou construir um mosteiro. No século XII, o mosteiro deu lugar a uma Colegiada, sob a invocação de Santa Maria e, mais tarde, de Nossa Senhora da Oliveira.",
          },
          "museu-arqueologia-diogo-sousa": {
            name: "Museu de Arqueologia D. Diogo de Sousa",
            description: "O Museu de Arqueologia D. Diogo de Sousa tem desenvolvido a sua atividade no âmbito da preservação, valorização e mediação do património arqueológico local e regional. Abriu ao público a 29 de junho de 2007 em instalações construídas de raiz, implantadas na zona arqueológica mais significativa da cidade romana de Bracara Augusta. O Museu constitui-se como ponto de partida do roteiro de visita aos sítios arqueológicos musealizados, que se dispõem na sua proximidade.",
          },
          "museu-arqueologia-etnografia-setubal": {
            name: "Museu de Arqueologia e Etnografia do Distrito de Setúbal",
            description: "O Museu de Arqueologia e Etnografia do Distrito de Setúbal está instalado, desde a sua fundação, em 1974, em edifício setecentista e, em edifício contíguo, do século XIX onde funciona o seu Centro de Estudos Arqueológicos.",
          },
          "museu-biscainhos": {
            name: "Museu dos Biscainhos",
            description: "O Palácio dos Biscainhos é um notável exemplar da arquitetura residencial portuguesa, localizando-se na cidade de Braga, e no seu processo evolutivo abrange os séculos XVII e XVIII, estendendo-se ao século XIX, com expressivas intervenções ao nível dos Interiores Ornamentais destacando-se a Azulejaria, a Pintura e a Escultura.",
          },
          "museu-jose-malhoa": {
            name: "Museu José Malhoa",
            description: "Primeiro edifício a ser projetado para fins museológicos em Portugal, o Museu José Malhoa apresenta coleções de pintura, escultura e cerâmica dos séculos XIX e XX. A instituição também exibe o maior núcleo reunido de obras de José Malhoa, artista caldense que, através das suas obras naturalistas, leva os visitantes do Museu a um encontro com figuras populares (e singulares) de Portugal.",
          },
          "museu-nacional-arte-antiga": {
            name: "Museu Nacional de Arte Antiga",
            description: "Criado em 1884, habitando há quase 140 anos o Palácio Alvor e cumprindo mais de um século da atual designação, o Museu Nacional de Arte Antiga alberga a mais relevante coleção pública portuguesa, entre pintura, escultura, ourivesaria e artes decorativas europeias, de África e do Oriente.",
          },
          "museu-nacional-azulejo": {
            name: "Museu Nacional do Azulejo",
            description: "Criado em 1965, tornou-se Museu Nacional do Azulejo em 1980 e está instalado no antigo Convento da Madre de Deus. Dá a conhecer a história do azulejo em Portugal, protegendo e promovendo uma expressão artística diferenciadora da cultura portuguesa no mundo. ",
          },
          "museu-nacional-teatro-danca": {
            name: "Museu Nacional do Teatro e da Dança",
            description: "O Museu Nacional do Teatro e da Dança reúne o mais extenso acervo relativo às artes do espetáculo em Portugal,  e tem como missão incentivar e difundir o conhecimento sobre estas artes a partir da sua coleção de mais de 300.000 peças, incluindo figurinos e trajes de cena, desenhos e maquetas de cenários, adereços, cartazes e programas, discos e partituras, bem como fotografias, pinturas, esculturas e caricaturas. ",
          },
          "museu-nacional-traje": {
            name: "Museu Nacional do Traje",
            description: "O Museu Nacional do Traje reúne uma coleção de indumentária e acessórios desde o século XVIII até à atualidade, representando diversos períodos históricos, estilos ou tendências. Está instalado no Palácio Angeja-Palmela, numa antiga quinta de recreio de Lisboa, e tem em anexo o Parque Botânico do Monteiro-Mor, criado no século XVIII, com projeto do italiano Domenico Vandelli.",
          },
          "museu-nacional-coches": {
            name: "Museu Nacional dos Coches",
            description: "Inaugurado em 2015, o novo Museu Nacional dos Coches foi projetado pelo arquiteto brasileiro Paulo Mendes da Rocha, prémio Pritzker em 2006, em parceria com o arquiteto português Ricardo Bak Gordon. Mais do que um museu, o projeto funciona como uma infraestrutura urbana, que oferece espaço público à cidade de Lisboa.",
          },
          "museu-nacional-etnologia": {
            name: "Museu Nacional Etnologia",
            description: "O edifício onde o Museu se encontra atualmente foi inaugurado em 1976, com desenho do arquiteto António Saragga Seabra. Em 2000, o arquiteto Eduardo Trigo de Sousa dá forma ao projeto de ampliação do edifício, criando-se um espaço de biblioteca/mediateca, duas áreas de reserva e o jardim envolvente. As novas reservas, agora visitáveis – Galerias da Vida Rural e Galerias da Amazónia – foram inauguradas em 2000 e em 2006, respetivamente.",
          },
          "museu-nacional-frei-manuel-cenaculo": {
            name: "Museu Nacional Frei Manuel do Cenáculo",
            description: "Ocupa um espaço privilegiado no centro de Évora, cidade Património Mundial, tendo na sua génese a coleção de Frei Manuel do Cenáculo (1724-1814), influente intelectual do período pombalino, colecionador de arte e um dos pioneiros da arqueologia em Portugal.",
          },
          "paco-duques-braganca": {
            name: "Paço dos Duques de Bragança",
            description: "O Paço dos Duques de Bragança, situado na cidade de Guimarães, é um magnífico exemplar da arquitetura senhorial quatrocentista e berço da Casa de Bragança. Está classificado como Monumento Nacional desde 1910 e engloba na sua estrutura uma ala destinada a residência oficial da Presidência da República.",
          },
          "ruinas-casa-rua-burgos": {
            name: "Ruínas da Casa na Rua de Burgos",
            description: "Casa abastada gótica, quinhentista, setecentista, oitocentista e do século 20, com influência arquitetónica de vários períodos históricos, destacando-se a permanência das intervenções setecentistas como definidoras do espaço, conservando apenas do período coetâneo da sua construção um portal gótico.",
          },
          "se-braga": {
            name: "Sé de Braga",
            description: "As colecções do Tesouro-Museu da Sé de Braga testemunham, no seu conjunto, mais de XV séculos da história da Arte e da vida da Igreja em Braga. Detém um valioso acervo constituído pelas colecções de Ourivesaria, Escultura, Pintura, Têxtil, Mobiliário, Cerâmica, assim como, todo um conjunto de objectos ligados ao culto católico.",
          },
          "se-evora": {
            name: "Sé de Évora",
            description: "O terraço da Catedral é o ponto mais alto da cidade. Daí se avista toda a cidade, seja a cidade histórica dentro das muralhas, com todo o seu património, seja a cidade nova constituída por vários bairros em toda a volta. Uma visita obrigatória para se conhecer bem a cidade de Évora.",
          },
          "se-portalegre": {
            name: "Sé de Portalegre",
            description: "O bispado de Portalegre foi criado em 1550 por bula do Papa Júlio III, sendo esta uma das três novas dioceses criadas no reinado de D. João III. O primeiro prelado a ser nomeado para o cargo de bispo da nova diocese foi D. Julião de Alva, confessor da rainha D. Catarina.",
          },
          "sitio-arqueologico-castro-cola": {
            name: "Sítio Arqueológico de Castro de Cola",
            description: "O Castro da Cola está classificado como Monumento Nacional desde 1910 e trata-se de um povoado fortificado com ocupação humana comprovada desde a Idade do Bronze até à Baixa Idade Média. É muito provável que corresponda à povoação de Marachique, mencionada em fontes islâmicas e referida em documentação medieval cristã até ao século XIII, e que, no século XIV, terá sido abandonada.",
          },
          "sitio-arqueologico-mirobriga": {
            name: "Sítio Arqueológico de Miróbriga",
            description: "Miróbriga foi habitada desde, pelo menos, a Idade do Ferro até ao século IV d.C. Estas ruínas encontram-se implantadas numa zona privilegiada de visibilidade que permitia controlar territorialmente toda uma região, profícua em recursos agrícolas, marítimos e mineiros, pelo que este sítio arqueológico terá desempenhado um papel comercial de relativo destaque.",
          },
          "sitio-arqueologico-sao-cucufate": {
            name: "Sítio Arqueológico de São Cucufate",
            description: "Datada do Século I d.C. esta villa romana foi centro de exploração agrícola, onde poderá ter residido o proprietário. Com algumas descontinuidades, transformações e adaptações, a ocupação deste mesmo espaço prolongou-se até aos finais do século XVIII e, em área contígua, a poente, instalou-se, em época contemporânea, a horta de S. Cucufate e a sua pequena casa.",
          },
          "sitio-arqueologico-torre-palma": {
            name: "Sítio Arqueológico de Torre de Palma",
            description: "Torre de Palma é um espaço organizado e pensado para a vivência rural. Bem estruturada para a exploração agrícola, era também local de recolhimento e de lazer do proprietário. A villa, propriamente dita, emergiu ainda durante o século I d.C. e foi ocupada até ao século V.",
          },
          "torre-castelo-evoramonte": {
            name: "Torre do Castelo de Evoramonte",
            description: "A Torre/Paço do Castelo de Evoramonte é uma imponente construção de alvenaria revestida de cimento, de planta centrada com quatro bastiões ou torres ultra semicirculares nos ângulos. A sua localização, numa oportuna elevação em ampla planície, propiciou, desde cedo, o estabelecimento de um ponto estratégico e fortificado que, segundo a tradição, terá sido de fundação árabe.",
          },
          "se-nova-coimbra": {
            name: "Sé Nova de Coimbra",
            description: "Estabelecido em 1542 pela Companhia de Jesus, foi o primeiro Colégio da Ordem em Portugal e o maior que existiu na cidade, também conhecido por Colégio das Onze Mil Virgens.",
          },
          "se-velha-coimbra": {
            name: "Sé Velha de Coimbra",
            description: "Coimbra (Aeminium, na época romana) é sede episcopal desde o século V, sucedendo à vizinha Conímbriga. Apesar da sua longa história, não há notícia da catedral até à construção da Sé de Santa Maria de Coimbra, que teve início em 1164 por iniciativa do bispo D. Miguel Salomão. Esta foi consagrada em 1184, embora o resto do edifício ainda não estivesse terminado e, em 1185, ali foi coroado o segundo rei de Portugal, D. Sancho I. É a única catedral portuguesa românica, da época da Reconquista, que sobreviveu relativamente intacta até aos nossos dias.",
          },
          "museu-machado-castro": {
            name: "Museu Nacional Machado de Castro",
            description: "O Museu Nacional de Machado de Castro é um dos mais importantes museus de Portugal. Foi assim denominado em homenagem ao destacado escultor conimbricense Machado de Castro (1731-1822). Abriu ao público em 1913, tendo António Augusto Gonçalves como primeiro diretor (1913-28). Em 1965, o Estado incluiu-o na lista dos Museus Nacionais, reconhecendo a sua excecional qualidade.",
          },
          "museu-conimbriga": {
            name: "Museu Nacional de Conimbriga",
            description: "Inaugurado em 1962 como Museu Monográfico de Conímbriga, foi classificado como Museu Nacional em 2017. O espaço museológico corresponde grosso modo à área da cidade antiga de Conímbriga (apenas parcialmente musealizada), integrando as ruínas, quer a parte escavada, quer a reserva arqueológica, o Museu e alguns espaços circundantes.",
          },
          "fortaleza-sagres": {
            name: "Fortaleza de Sagres",
            description: "A imponente Fortaleza de Sagres é o prolongamento humano do rochedo natural e foi durante séculos a principal praça de guerra de um sistema defensivo marítimo geoestratégico. Em 1443, a política da expansão portuguesa nos séculos XV e XVI levou o Infante D. Henrique a obter autorização junto do seu irmão, o regente D. Pedro, para a criação da Vila do Infante no promontório de Sagres.",
          },
          "mosteiro-santa-clara-velha": {
            name: "Mosteiro de Santa Clara-a-Velha",
            description: "O apelo da forma de vida proposta por Santa Clara levou Dona Mor Dias a fundar uma casa de Clarissas perto do convento franciscano, na margem esquerda do rio Mondego. Em13 de abril de 1283, obteve licença para construir um mosteiro dedicado a Santa Clara e a Santa Isabel da Hungria, mas o património com que dotou o convento foi disputado pelos cónegos do mosteiro de Santa Cruz de Coimbra, originando um longo conflito que culminou na extinção do mosteiro de Dona Mor em 1311.",
          },
          "real-mosteiro-santa-maria-alcobaca": {
            name: "Real Mosteiro de Santa Maria de Alcobaça",
            description: "A fundação da Abadia de Santa Maria de Alcobaça e respetiva Carta de Couto datam de 8 de abril de 1153. Os domínios da Ordem de Cister ficam assim consagrados. Os do Reino de Portugal, com a conquista das cidades de Santarém e de Lisboa, em 1147, avançaram para sul em direção à Linha do Tejo. Este facto obrigava a um povoamento rápido e eficaz para que a expansão cristã continuasse para sul.",
          },
          "ruinas-romanas-milreu": {
            name: "Ruínas Romanas de Milreu",
            description: "Localizada a poente da aldeia histórica de Estoi, a 8km de Faro, a Villa Romana de Milreu revela uma ocupação continuada desde o século I e até ao século XI. O conhecimento da sua história revela-nos que terá sido habitada por famílias de elevado estatuto social e político, às quais eram proporcionadas as necessidades não só de um quotidiano rural, como também de grande vivência lúdica.",
          },
          "gruta-escoural": {
            name: "Gruta do Escoural",
            description: "A Gruta do Escoural é uma cavidade natural, descoberta acidentalmente a 17 de abril de 1963, durante uns trabalhos de exploração de uma pedreira que operava no local, sendo composta por várias salas e galerias, distribuídas por três diferentes níveis. A 25 de outubro de 1963 foi classificada como Monumento Nacional.",
          },
        },
      },
      modelGallery: {
        subheading: "Acesso de Dados",
        title: "REPOSITÓRIO DE GÉMEOS DIGITAIS",
        introPrefix: "Explore os resultados dos levantamentos e processamentos. Aceda diretamente às pastas de",
        introConnector: "e",
        introSuffix: "disponíveis para cada local.",
        backButton: "Voltar",
        filterLabel: "Filtrar por:",
        filterAll: "Todos",
        filterData: "Dados",
        filterModels: "Modelos 3D",
        filterDemos: "Demos",
        searchPlaceholder: "Pesquisar local...",
        spacesBadge: "{{total}} Espaços",
        resourcesLabel: "Recursos",
        multipleAreas: "Múltiplas Áreas",
        tooltipData: "Dados",
        tooltipModels: "Modelos 3D",
        tooltipDemos: "Demos e Vídeos",
        emptyTitle: "Nenhum resultado encontrado",
        emptyText: "Não existem locais que correspondam à sua combinação de filtros selecionada.",
        clearFilters: "Limpar Filtros",
        modalSubheading: "Explorador de Arquivos",
        mainDirectoryLabel: "Diretoria Principal",
        openMainFolder: "Abrir Pasta Principal",
        openMainFolderHint: "Ver todos os arquivos e subdiretórios unificados",
        subLocationsLabel: "Sub-localizações / Divisões",
        resourceSubfoldersLabel: "Subpastas de Recursos",
        resourceData: "Dados",
        resourceModels: "Modelos 3D",
        resourceDemos: "Demos & Vídeos",
        filesAvailable: "Ficheiros Disponíveis",
        folderEmpty: "Pasta Vazia / Indisponível",
        subfolders: {
          mnazModels3d: "MNAZ Completo Modelos 3D",
          mnazData: "MNAZ Completo Dados",
          salaSantosSimoes: "Sala Santos Simões",
          panoramaLisboa: "Panorama de Lisboa",
          palacioGalveias: "Palácio das Galveias",
          igrejaSaoLourenco: "Igreja de São Lourenço",
          jardimAmoreiras: "Jardim das Amoreiras",
          hbimMscv: "HBIM MSCV",
        },
        names: {
          "agnostico-museu-nacional-arqueologia": "Museu Nacional de Arqueologia",
          "convento-de-cristo": "Convento de Cristo",
          "casa-corpo-santo": "Casa do Corpo Santo",
          "castelo-elvas": "Castelo de Elvas",
          "casa-museu-anastacio-goncalves": "Casa Museu Dr. Anastácio Gonçalves",
          "castelo-viana-alentejo": "Castelo de Viana do Alentejo",
          "convento-de-sao-bento-de-castris": "Convento de São Bento de Cástris",
          "gruta-do-escoural": "Gruta do Escoural",
          "mosteiro-de-alcobaca": "Mosteiro de Alcobaça",
          "museu-de-arqueologia-e-etnografia-do-distrito-de-setubal": "Museu de Arqueologia e Etnografia do Distrito de Setúbal",
          "museu-arte-popular": "Museu Arte Popular",
          "museu-nacional-grao-vasco": "Museu Nacional Grão Vasco",
          "mosteiro-dos-jeronimos": "Mosteiro dos Jerónimos",
          "museu-nacional-arte-antiga": "Museu Nacional de Arte Antiga",
          "museu-nacional-azulejo": "Museu Nacional do Azulejo",
          "museu-nacional-conimbriga": "Museu Nacional de Conimbriga",
          "museu-nacional-dos-coches": "Museu Nacional dos Coches",
          "museu-nacional-etnologia": "Museu Nacional de Etnologia",
          "museu-nacional-etnologia-conimbriga": "Museu Nacional de Etnologia de Conimbriga",
          "museu-nacional-frei-manuel-cenaculo": "Museu Nacional Frei Manuel do Cenáculo",
          "museu-nacional-resistencia-liberdade": "Museu Nacional Resistência e Liberdade",
          "museu-nacional-traje": "Museu Nacional do Traje",
          "museu-nacional-teatro-danca": "Museu Nacional do Teatro e da Dança",
          "mosteiro-santa-clara-velha": "Mosteiro de Santa Clara-a-Velha",
          "panteao-nacional": "Panteão Nacional",
          "ruinas-casa-rua-burgos": "Ruínas da Casa na Rua de Burgos",
          "ruinas-romanas-milreu": "Ruínas Romanas de Milreu",
          "sitio-arqueologico-sao-cucufate": "Sítio Arqueológico de São Cucufate",
          "sitio-arqueologico-torre-palma": "Sítio Arqueológico de Torre de Palma",
          "se-braga": "Sé de Braga",
          "se-evora": "Sé de Évora",
          "se-lisboa": "Sé de Lisboa",
          "se-portalegre": "Sé de Portalegre",
          "torre-castelo-evoramonte": "Torre do Castelo de Evoramonte",
          "concatedral_miranda_douro": "Concatedral de Miranda do Douro",
          "citania-santa-luzia": "Citânia de Santa Luzia",
          "convento-sao-salvador-vilar-frades": "Convento de S. Salvador de Vilar de Frades",
          "estacao-arquologica-tongobriga": "Estação Arqueológica do Freixo de Tongóbriga",
          "ermida-nossa-senhora-guadalupe": "Ermida de Nossa Senhora de Guadalupe",
          "fortaleza-sagres": "Fortaleza de Sagres",
          "museu-abade-bacal": "Museu do Abade de Baçal",
          "museu-nacional-soares-reis": "Museu Nacional Soares dos Reis",
          "mosteiro-sao-joao-tarouca": "Mosteiro de São João de Tarouca",
          "mosteiro-batalha": "Mosteiro da Batalha",
          "museu-setubal-convento-jesus": "Museu de Setúbal e Convento de Jesus",
          "mosteiro-santa-maria-salzedas": "Mosteiro de Santa Maria de Salzedas",
          "mosteiro-santa-maria-pombeiro": "Mosteiro de Santa Maria de Pombeiro",
          "palacio-nacional-mafra": "Palácio Nacional de Mafra",
          "sitio-arqueologico-castro-cola": "Sítio Arqueológico do Castro Cola",
          "sitio-arqueologico-mirobriga": "Sítio Arqueológico de Miróbriga",
          "se-lamego": "Sé de Lamego",
          "se-nova-coimbra": "Sé Nova de Coimbra",
          "santuario-panoias": "Santuário de Panóias",
          "se-porto": "Sé do Porto",
          "se-viseu": "Sé de Viseu",
          "museu-biscainhos": "Museu dos Biscainhos",
          "museu-jose-malhoa": "Museu José Malhoa",
          "museu-nacional-coches-picadeiro-real": "Museu Nacional dos Coches Picadeiro Real",
          "museu-nacional-musica": "Museu Nacional da Música",
          "centro-nacional-arqueologia-nautica-subaquatica": "Centro Nacional de Arqueologia Náutica e Subaquática",
          "domus-municipalis": "Domus Municipalis",
          "museu-arqueologia-d-diogo-sousa": "Museu de Arqueologia D. Diogo de Sousa",
          "museu-alberto-sampaio": "Museu Alberto Sampaio",
          "museu-nacional-arte-contemporanea": "Museu Nacional de Arte Contemporânea",
          "museu-nacional-machado-castro": "Museu Nacional Machado de Castro",
          "palacio-nacional-ajuda": "Palácio Nacional da Ajuda",
          "torre-belem": "Torre de Belém",
          "mosteiro-sao-martinho-tibaes": "Mosteiro de São Martinho de Tibães",
          "se-velha-coimbra": "Sé Velha de Coimbra",
        },
      },
      projects: {
        deployment: {
          title: "Plataforma de Monitorização Ambiental para preservação Cultural",
          subtitle: "Plataforma de Monitorização IoT",
          description: [
            "O projecto encontra-se a desenvolver uma plataforma cloud para a monitorização ambiental de espaços patrimoniais e culturais, permitindo a recolha, armazenamento e análise contínua de dados provenientes de gateways IoT e sensores distribuídos pelo espaço monitorizado.",
            "A plataforma integra dashboards em tempo real, visualização de séries temporais, mapas interativos, configuração remota de dispositivos e sistemas automáticos de alertas ambientais. O sistema suporta comunicação via MQTT e HTTPS, garantindo redundância e fiabilidade na transmissão dos dados.",
            "Para além da monitorização ambiental, o projeto incorpora ferramentas de inteligência artificial para deteção de anomalias, análise preditiva e apoio ao diagnóstico de conservação preventiva. A infraestrutura foi desenvolvida com Firebase, Google Cloud Run, Firestore e Vertex AI, permitindo elevada escalabilidade e integração com dispositivos IoT de baixo consumo energético."
          ],
          githubRepoLabel: "Repositório GitHub (Código e Documentação)",
        },
        firmware: {
          title: "Firmware para a Plataforma de Monitorização",
          subtitle: "Firmware e Infraestrutura IoT",
          description: [
            "O projeto Metrozero Firmware reúne o conjunto de firmwares utilizados na infraestrutura IoT do sistema Metrozero, incluindo sensores ambientais baseados em STM32WB55 e gateways ESP32-S3 responsáveis pela recolha e sincronização dos dados ambientais.",
            "O sistema suporta atualizações OTA (Over-The-Air), comunicação BLE entre sensores e gateway, armazenamento local em cartão SD e sincronização cloud através de MQTT e HTTPS. A arquitetura foi desenvolvida para cenários de monitorização contínua em património cultural e espaços museológicos.",
            "Para além do firmware principal, o projeto inclui procedimentos completos de flashing, bootloaders, stacks BLE, configuração de memória e documentação de deployment em ambiente real. O sistema foi implementado em campanhas de monitorização nos Jerónimos, suportando múltiplos sensores em simultâneo com gestão remota e atualizações automáticas."
          ],
          mainRepoLabel: "Repositório Principal (Código e Documentação)",
          devSharepointLabel: "HW-FW-SW Development",
        },
        escoural: {
          title: "Visita em realidade virtual à Gruta do Escoural",
          subtitle: "Experiências Imersivas",
          description: [
            "Visualização imersiva da Gruta do Escoural, baseada num modelo captado com recurso a fotogrametria e laser-scanning. Com recurso a um motor de jogo, o modelo da gruta é iluminado em tempo real de forma foto-realística e os utilizadores podem explorar as diferentes áreas de forma interativa numa perspetiva de primeira pessoa."
          ],
          modelAppLinkLabel: "Modelo e aplicação da Visita Virtual",
        },
        hbim: {
          title: "Desenvolvimento de HBIMs",
          subtitle: "Processamento e Demonstração de Dados: Jerónimos e Santa Clara-a-Velha",
          description: [
            "No âmbito deste projeto, foi desenvolvida uma metodologia de modelação HBIM (Historic Building Information Modeling) e documentação de patologias focada nos casos de estudo do Mosteiro dos Jerónimos e do Mosteiro de Santa Clara-a-Velha. O processo assenta na utilização de nuvens de pontos tridimensionais georreferenciadas como referência métrica fundamental, permitindo a construção e deformação de elementos-tipo paramétricos (paredes, vigas, pilares) até uma aproximação rigorosa das superfícies reais dos edifícios.",
            "Para o Mosteiro de Santa Clara-a-Velha, converteu-se o extenso arquivo vetorial DWG (1998-2008) diretamente em elementos IFC tridimensionais via scripts Python (ifcopenshell), preservando a classificação por camadas e criando um registo semântico de danos e intervenções. Já no Mosteiro dos Jerónimos, processaram-se levantamentos gráficos raster de 1999 através da extração e classificação automática de tramas de patologia por filtros de textura e projeção de raios sobre o modelo 3D, gerando anotações semânticas normalizadas segundo as taxonomias HeritageCare e Damage Ontology.",
            "Todos os modelos IFC e os seus metadados (incluindo mais de 150 documentos históricos e relatórios) estão integrados num grafo de conhecimento e numa plataforma de visualização web aberta. O sistema democratiza o acesso ao registo patrimonial através de qualquer navegador, permitindo consultas espaciais, interrogações SPARQL e novos fluxos de trabalho de conservação — desde a anotação de danos in situ via mobile até à exportação de tópicos BCF para gestão de obras."
          ],
          jeronimosViewerLabel: "Visualizador HBIM — Mosteiro dos Jerónimos",
          mscvViewerLabel: "Visualizador HBIM — Mosteiro de Santa Clara-a-Velha",
          ifcDocsLabel: "Estruturas IFC e documentação (OneDrive)",
        },
        milreu: {
          title: "Reconstrução Ruínas Romanas de Milreu",
          subtitle: "Experiências Imersivas",
          description: [
            "A reconstrução de Milreu parte da recolha documental de referências históricas e arqueológicas para o levantamento do espaço. O projeto pretende a construção de vários espaços das Ruínas Romanas de Milreu (RRM), tanto no exterior como no interior. Isto, com o objetivo de aprimorar a experiência dos visitantes proporcionando uma experiência que permita uma melhor exploração do espaço, maior envolvência do público e, também, uma mediação museológica que permita valorizar ainda mais o seu valor histórico, artístico e cultural.",
            "Para o efeito, realizam-se as reconstruções tridimensionais através do Blender, uma aplicação open source, que permite a criação dos modelos 3D, atribuição de texturas e criação de animações. O programa facilita, também, a importação de modelos tridimensionais de objetos que foram digitalizados no projeto Património 360º e que integraram as RRM, bem como, a exportação de imagens renderizadas para infografias e criação de materiais audiovisuais.",
            "Para além das imagens disponíveis, é possível consultar o modelo tridimensional no Blender. Deverá ser instalada a versão mais recente do programa e abrir o documento em anexo."
          ],
          versions: {
            normal: "Normal",
            evidence: "Evidência Histórico-Arqueológica",
          },
          links: {
            peristilo: "Ver Modelo 3D (Peristilo)",
            atrio: "Ver Modelo 3D (Átrio)",
            termas: "Ver Modelo 3D (Termas)",
            culto: "Ver Modelo 3D (Edifício de Culto)",
            triclinio: "Ver Modelo 3D (Triclínio)",
            contentAccess: "Acesso ao contéudo das Ruínas Romanas de Milreu",
            arApp: "Aplicação de realidade aumentada das Ruínas Romanas de Milreu",
          },
        },
        santaClara: {
          title: "Mosteiro de Santa Clara-a-Velha",
          subtitle: "Simulação de cheias",
          description: [
            "Simulação Unity para visualizar, explorar e demonstrar como diferentes cheias históricas inundaram o Mosteiro de Santa Clara-a-Velha. Permite ver o nível da água para anos específicos e comparar eventos ao longo do tempo.",
            "A simulação mostra uma cena 3D com a superfície de água que sobe e baixa de acordo com o ano; painel de controlo com botões para escolher anos, descrição do evento e um slider para ajustar o nível de água dentro do intervalo daquele ano.",
            "É possível escolher um ano clicando no botão do ano no menu ou premindo teclas numéricas (1..9 e 0 para o 10.º). O slider ajusta o nível de água e a cena atualiza em tempo real."
          ],
          driveLinkLabel: "Drive com Projeto",
        },
        search: {
          title: "Pesquisa para HBIMs",
          subtitle: "Extração de Informação HBIM e Consulta Conversacional",
          description: [
            "Este projeto é uma ferramenta para consultar e explorar modelos digitais de edifícios através de uma interface conversacional. Em vez de obrigar o utilizador a navegar manualmente por ficheiros BIM/HBIM complexos, a aplicação permite fazer perguntas em linguagem natural sobre os elementos do modelo, como paredes, escadas, materiais, pisos, classificações ou quantidades.",
            "A solução transforma a informação técnica do modelo num formato pesquisável e depois disponibiliza-a através de um assistente. O utilizador pode, por exemplo, pedir listas de elementos, fazer perguntas sobre características específicas, obter contagens por tipo de elemento ou material, e pedir mais detalhes sobre um resultado encontrado.",
            "No geral, o projeto procura tornar a informação BIM mais acessível, rápida de consultar e útil para análise. É especialmente relevante para contextos de arquitetura, engenharia, património construído e gestão de edifícios, onde existe muita informação técnica associada aos modelos, mas nem sempre é fácil encontrá-la ou interpretá-la diretamente."
          ],
          githubRepoLabel: "Repositório Principal (Pipeline e Documentação)",
        },
        segmentation: {
          title: "Segmentação para HBIMs",
          subtitle: "Integração Semântica e Enriquecimento",
          description: [
            "Esta pipeline foca-se na automação da captura de dados através da abordagem 'Scan-to-BIM'. O processo inicia-se com a Segmentação 2D, onde utilizamos o modelo SAM3 (Segment Anything Model) assistido por prompts de classes. Para melhorar a precisão, integrámos um LLM Multimodal que filtra ruído e melhora a inferência de materiais, permitindo identificar artefactos específicos com base no acervo visual do museu.",
            "Na segunda fase, ocorre a Projeção de Rótulos para a Nuvem de Pontos. Através dos parâmetros intrínsecos e extrínsecos da câmara, projetamos os rótulos das máscaras 2D diretamente nos pontos 3D. A consistência semântica da nuvem é garantida por um processo de fusão multi-vista baseado em 'majority voting', que resolve discrepâncias entre diferentes perspetivas fotográficas.",
            "Finalmente, procedemos à Geração do Modelo HBIM (Heritage Building Information Modeling). A nuvem de pontos segmentada é limpa e simplificada para otimização de performance, agrupando classes em formas geométricas fundamentais. O resultado é um Digital Twin rigoroso em formato BIM, que inclui relações espaciais complexas (IFCRelations) e metadados métricos precisos para a gestão do edíficio."
          ],
          githubRepoLabel: "Repositório Principal (Pipeline e Documentação)",
          resultsLabel: "Resultados e Testes de Projeções e HBIMs",
        },
        visitorFlow: {
          title: "Desenvolvimento de UX e UI para os projetos do Digital Twins",
          subtitle: "Experiência e Interface do Utilizador",
          description: [
            "O processo de desenvolvimento da experiência do utilizador (UX) e da interface do utilizador (UI) começou com a compreensão dos objetivos do projeto. Isto foi feito junto da equipa do Digital Twins e dos responsáveis pelos Monumentos. Após serem assinalados os principais objetivos para ambas as partes, teve se em consideração o público-alvo e as outras condicionantes do projeto.",
            "Foram então desenvolvidos diversos user-flows que tentaram responder às problemáticas indicadas e à criação de uma boa experiência para os utilizadores desde o primeiro momento.",
            "Depois destes percursos definidos começou se a dar materialização aos mesmos através de wireframes e protótipos de baixa fidelidade para se poder perceber e melhorar as soluções propostas. Estes protótipos também serviram de ponte entre a conceptualização e a implementação final. Num dos projetos foi ainda feito um estudo de utilizadores para poder dar ainda mais contexto e melhorias à proposta.",
            "Depois da experiência definida começou o processo de trazer estas soluções para a realidade. Para isto teve se em consideração as soluções e as condicionantes que daí advinham assim como o local de utilização destas aplicações. Tentou-se então criar uma materialização que fosse facilmente reconhecida, coerente, que remetesse para materiais reais e, por fim, que fizesse sentido com o contexto de cada parte do projeto. Nesta fase acrescentou-se se mais partes do projeto e foi mais uma vez necessário perceber os seus contextos.",
            "Começou-se por definir, para cada uma das aplicações, uma palete de cores e fontes a serem utilizadas. Foram então definidos e organizados todos os elementos interativos que cada aplicação necessitaria assim como o layout de cada página principal das diversas aplicações. Depois de definidos foram padronizados para manterem uma linguagem coerente dentro de cada aplicação.",
            "Por fim foram criados diversos guias de implementação para ajudar os colegas responsáveis pela implementação final a corretamente aplicarem os elementos gráficos criados."
          ],
          docsLinkLabel: "Desenvolvimento, Assets e Documentação Técnica (OneDrive)",
        },
        visitorFlow2: {
          title: "Monitorização de Fluxo e Ocupação - Mosteiro dos Jerónimos",
          subtitle: "IoT, Edge Computing & Privacidade",
          description: [
            "Este projeto foca-se na monitorização inteligente do fluxo de visitantes no Mosteiro dos Jerónimos, assente num princípio rigoroso de 'Privacy by Design'. A solução utiliza sensores Time-of-Flight (VL53L1X) e mmWave de 24 GHz para capturar métricas de ocupação sem nunca recolher imagens faciais, identidades ou identificadores de dispositivos móveis. A infraestrutura de firmware foi desenhada para microcontroladores STM32WB55, garantindo o processamento local (Edge) dos dados antes do envio de agregados anónimos.",
            "O subsistema de contagem implementa uma lógica de sensores duplos ToF com uma frequência de amostragem de 20 Hz. Para garantir a precisão, os sinais passam por um filtro de mediana e uma máquina de estados que valida a direção do movimento (In/Out) com base em diferenciais temporais (tA < tB). O algoritmo inclui períodos refratários de 1200ms e timeouts de direção para filtrar eventos espúrios, permitindo uma gestão de ocupação em tempo real com baixo consumo energético e alta fiabilidade em zonas de passagem.",
            "Para a geração de Mapas de Calor Anónimos, integrámos radares mmWave via UART que mapeiam a presença humana numa grelha de 12 células (4x3). Através de um filtro EMA (Exponential Moving Average) com alpha de 0.35, o sistema suaviza flutuações de sinal e identifica zonas de maior permanência. Os dados são agregados em janelas de 30 segundos e transmitidos via gateways ESP32-S3 através de protocolos MQTT e BLE, suportando gestão remota e atualizações OTA (Over-the-Air) para manutenção da rede de sensores."
          ],
          docsLinkLabel: "Código e Documentação Técnica (OneDrive)",
        },
        azulejo: {
          title: "AR e VR - Museu Nacional do Azulejo",
          mainSubtitle: "Experiências Imersivas para Turismo",
          tabLabel: "Experiência {{tab}}",
          backButton: "Voltar",
          resourcesHeader: "Recursos {{tab}}",
          vr: {
            subtitle: "Realidade Virtual — Visualização dos espaços onde os Azulejos já estiveram",
            description: [
              "O projeto de VR para o museu do azulejo utiliza portais para conectar ambientes que estão em camadas diferentes (no Unity associamos layers para esconder ou mostrar ambientes virtuais).",
              "O projeto conta com 3 scenes:\n- Hedge App Scene - Contém a aplicação com a visita prolongada do museu, com os vários textos dos azulejos, e acesso através de portais para 3 modelos: jardim das Amoreiras, palácio das Galveias e igreja São Lourenço.\n- Quick Version - Igual a Hedge App Scene, mas sem o texto dos azulejos, focando-se só na transição entre ambientes.\n- Sample Scene - Scene de testes.",
              "O projeto usa também o Meta SDK para fazer a integração com os Oculus Meta Quest 3S, usando tecnologia como o teleporte com gestos de mão ou comandos para se locomover no ambiente."
            ],
            linkLabel: "Código do Projeto/Documentação (OneDrive)",
          },
          ar: {
            subtitle: "Realidade Aumentada — Deteção de imagens dos monumentos do panorama de Lisboa",
            description: [
              "Aplicação feita em Unity para reconhecimento de imagens de monumentos do panorama de Lisboa no Museu Nacional do Azulejo, para mostrar a informação dos azulejos que estiveram nesses monumentos.",
              "A aplicação utiliza o AR Foundation (package do Unity) para fazer o reconhecimento de imagens. O projeto tem uma biblioteca de imagens do panorama, que quando são reconhecidas instanciam elementos de UI para o utilizador interagir e ver a informação sobre o monumento reconhecido.",
              "O projeto contém 3 scenes:\n- ImageTracking - Tirada da documentação do AR Foundation, tem um exemplo prático de como funciona o image tracking.\n- MNAz - Scene principal onde está feito o reconhecimento de imagens do panorama de Lisboa.\n- SampleScene - Scene de teste."
            ],
            linkLabel: "Código do Projeto/Documentação (OneDrive)",
          },
        },
      },
      aboutDetailed2: {
        subheading: "Sobre o Projeto",
        title: "Mais Informações",
        heroText: "Texto principal de apresentação aqui...",
        objectiveText: "Texto de objetivos...",
        conservationTitle: "Conservação e Restauro",
        conservationParagraph1: "Parágrafo 1...",
        conservationParagraph2: "Parágrafo 2...",
        applicationTitle: "Aplicações Práticas",
        applicationIntro: "Introdução sobre aplicações...",
        generalScopeLabel: "Escopo Geral",
        generalScopeText: "Descrição do escopo geral...",
        advancedScopeLabel: "Escopo Avançado",
        advancedScopeText: "Descrição do escopo avançado...",
        whitePaperText: "Informação do white paper...",
        ecosystemQuote: "Citação relevante sobre o ecossistema...",
        consortiumTitle: "Consórcio",
        institutionsTitle: "Instituições",
        researchUnitsTitle: "Unidades de Investigação e Parceiros",
        roles: {
          pi: "Investigador Principal",
        },
      },
      projectDetail2: {
        backButton: "Voltar",
        aboutSectionTitle: "Sobre o Projeto",
        linksSectionTitle: "Documentação/Links",
        modalDisclaimer: "Modelo otimizado para navegação web rápida. Versão oficial na OneDrive.",
        downloadModelButton: "Descarregar Modelo Completo",
        loadingText: "A carregar {{progress}}%",
      },
    },
  },
















  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        pilotProjects: "Pilot Projects",
        technology: "Technology",
        repository: "Repository",
      },
      aboutDetailed: {
        subheading: "About the Project",
        title: "Who We Are",
        heroText: "The DT4SST-CH.PT project aims to establish itself as an innovative model for the management and valorization of Portuguese cultural heritage. Funded by the Recovery and Resilience Plan (PRR, measure C19-i08 \"Smart Territories\"), the consortium is led by NOVA FCT and includes NOVA FCSH, the University of Évora, Museus e Monumentos de Portugal, E.P.E., and Património Cultural, I.P. (PC).",
        objectiveText: "The main objective of the project is to develop precise virtual replicas (Digital Twins) through the convergence of advanced high-resolution 3D scanning techniques (LiDAR and photogrammetry), Heritage Building Information Modeling (HBIM), Internet of Things (IoT), and Artificial Intelligence (AI).",
        conservationTitle: "Predictive Conservation and Monitoring",
        conservationParagraph1: "One of the most innovative components of this project is the integration of IoT and AI for predictive conservation. Through the physical deployment of sensor networks connected to a real-time visualization dashboard, continuous monitoring of structural integrity, ambient conditions, and visitor flow becomes possible.",
        conservationParagraph2: "The collected data is analyzed using machine learning techniques, enabling predictive maintenance processes. This matrix grants built heritage greater resilience against various risks, including environmental hazards, flooding, biological deterioration, and micro-vibration wear.",
        applicationTitle: "Application Across All Heritage Sites",
        applicationIntro: "The methodology was designed to operate under a modular and scalable model, unfolding into two tactical tracks:",
        generalScopeLabel: "General Scope",
        generalScopeText: "Focused on creating a coherent digital shell and consolidating 3D models serving as the foundation for the Digital Twins of 65 museums and monuments included in the national Cultural Heritage 360 project.",
        advancedScopeLabel: "Advanced Experimentation",
        advancedScopeText: "Sensor network integration and immersive experience development (AR/VR/MR and gamification) across six pilot sites reflecting diverse architectural typologies and conservation challenges (Alcobaça Monastery, Santa Clara-a-Velha Monastery, Jerónimos Monastery, Escoural Cave, Milreu Roman Ruins, and National Azulejo Museum).",
        whitePaperText: "Additionally, findings from this national pilot will culminate in a \"White Paper.\" This document will compile strategic recommendations to guide the sustainable adoption of Digital Twins in public cultural heritage management policies.",
        ecosystemQuote: "The designed ecosystem extends beyond the cultural domain, benefiting from cross-cutting integration across the Smart Territories context.",
        consortiumTitle: "Consortium",
        institutionsTitle: "Institutions",
        researchUnitsTitle: "Research Units and Other Partners",
        roles: {
          pi: "Principal Investigator, Project Coordinator"
        }
      },
      footer: {
        description: "Heritage documentation and preservation through Digital Twins.",
        linksTitle: "Links",
        contactTitle: "Contact",
        address: "Palácio Flor da Murta, 2770-186 Paço de Arcos, Portugal",
        rights: "© 2026 NOVA FCT. ALL RIGHTS RESERVED.",
        links: {
          nova: "NOVA University Lisbon",
          fct: "NOVA FCT",
          fcsh: "NOVA FCSH",
          uevora: "University of Évora",
          mmp: "Museums and Monuments of Portugal",
          pc: "Cultural Heritage",
        },
      },
      home: {
        title: "Digital Twins",
        subtitle: "For Smart, Sustainable Tourism and Cultural Heritage Preservation",
      },
      model: {
        challengeSubheading: "THE SMART TERRITORIES CHALLENGE",
        title: "The Project",
        projectName: "DT4SST-CH.PT",
        paragraph1Before: "The project",
        paragraph1After: "proposes new methods for managing and enhancing Portuguese cultural heritage through the creation of digital twins for 65 national museums and monuments. Combining 3D scanning, IoT sensors, artificial intelligence, and augmented reality, the project promotes cultural heritage preservation, immersive tourist experiences, and sustainable management strategies.",
        paragraph2: "The project includes six pilot sites, which will host innovative demonstrations integrating environmental monitoring and interactive narratives in mixed reality environments. It culminates with the production of a White Paper that will compile recommendations for public policies and serve as a guide for creating and adopting digital twins in the cultural sector, positioning Portugal as an international reference in smart tourism and heritage preservation.",
        whoWeAreTitle: "Who We Are",
        moreInfoButton: "More Information About the Team",
        partners: {
          nova: "NOVA University Lisbon",
          uevora: "University of Évora",
          pc: "Património Cultural, I.P.",
          mmpMain: "Museums and Monuments",
          mmpSub: "of Portugal, E.P.E.",
        },
      },
      ourProject: {
        repositorySystem: "Repository System",
        documentationCenter: "DOCUMENTATION CENTER",
        headerSubtitle: "Centralized repository of applications, digital twins, and processing pipelines developed within the project.",
        projectsCount: "Projects",
        openAccess: "Open Access",
        activeApplications: "Active Applications",
        publicBadge: "Public",
        statusLabel: "Status",
        knowMore: "READ MORE",
        details: "Details",
        close: "Close",
        projectSummary: "Project Summary",
        externalResources: "External Resources",
        showcaseSub: "Digital Twin Showcase",
        showcaseTitle: "Pilot Sites: 3D Models & HBIM",
        showcaseDesc: "Geometric surveys, 3D meshes, and HBIM data produced for preservation, analysis, and digital exploration of cultural heritage.",
        resourcesCount: "Resources",
        viewFullGallery: "View Full Gallery",
        exploreModel: "Explore Model",
        openLabel: "Open",
        exploreFullGalleryCardTitle: "Explore Full Gallery",
        exploreFullGalleryCardDesc: "Discover our complete collection of 3D models, digital twins, and geometric surveys in the dedicated gallery.",
        seeMoreModels: "See More Models",
        footerAccessTitle: "Access to Code/Models/Documentation",
        footerAccessDesc: "All technical GitHub repositories are available via individual documentation.",
        viewOneDriveButton: "View All Projects on OneDrive",
        status: {
          inDevelopment: "In Development",
          finished: "Completed",
          research: "Research",
        },
        items: {
          p1: {
            title: "Environmental Monitoring Platform for Cultural Preservation",
            description: "Cloud platform for environmental monitoring of cultural heritage, integrating real-time dashboards, IoT, MQTT, and AI predictive analytics.",
          },
          p2: {
            title: "Firmware for the Monitoring Platform",
            description: "Firmware infrastructure for STM32WB55 sensors and ESP32-S3 gateways supporting OTA, BLE, MQTT, and remote IoT device management.",
          },
          p3: {
            title: "Flow and Occupancy Monitoring - Jerónimos",
            description: "Visitor counting system and anonymous heat maps using ToF and mmWave sensors with distributed IoT architecture (STM32/ESP32).",
          },
          p4: {
            title: "3D Model Segmentation for HBIM",
            description: "Automated segmentation pipeline of architectural elements from 3D point clouds.",
          },
          p5: {
            title: "HBIM Research",
            description: "Advanced research methodologies in Heritage Building Information Modeling.",
          },
          p6: {
            title: "Development of HBIMs",
            description: "3D IFC modeling and semantic pathology mapping from point clouds and historical archives.",
          },
          p7: {
            title: "Santa Clara-a-Velha Monastery Simulator",
            description: "Interactive Unity simulation for visualization and comparative analysis of historical floods at Santa Clara-a-Velha Monastery.",
          },
          p8: {
            title: "AR and VR Applications for the Tile Museum",
            description: "Interactive AR platforms for monument recognition and VR for immersive exploration of historical environments through portals.",
          },
          p9: {
            title: "Virtual Reality Tour of Escoural Cave",
            description: "Escoural Cave visualization based on 3D capture, navigable in real time.",
          },
          p10: {
            title: "Virtual Reconstruction of Milreu Roman Ruins",
            description: "3D virtual reconstruction of Milreu Roman Ruins developed in Blender based on historical and archaeological references.",
          },
          p11: {
            title: "UX and UI Development for Digital Twins Projects",
            description: "UX and UI process and design for Digital Twins projects.",
          },
        },
        pilots: {
          type: "Models & Mesh",
          p1: { name: "P1 - Santa Clara-a-Velha Monastery", location: "Coimbra" },
          p2: { name: "P2 - Milreu Roman Ruins", location: "Faro" },
          p3: { name: "P3 - Jerónimos Monastery", location: "Lisbon" },
          p4: { name: "P4 - Alcobaça Monastery", location: "Alcobaça" },
          p5: { name: "P5 - National Tile Museum", location: "Lisbon" },
          p6: { name: "P6 - Escoural Cave", location: "Alentejo" },
        },
      },
      ourProjectPublic: {
        sectionTag: "Pilot Projects and More",
        title: "MORE THAN JUST A PROJECT",
        description: "The six iconic locations chosen as pilot sites are Santa Clara-a-Velha, the Milreu Roman Ruins, the Jerónimos Monastery, the Alcobaça Monastery, the National Tile Museum, and the Escoural Cave. But we didn't stop there. The project continues to expand, mapping and integrating a much broader heritage network.",
        ctaTitle: "Discover All Smart Territories Locations",
        ctaDescription: "Explore our complete catalog of digital twins for monuments and museums.",
        ctaButton: "View all locations",
        boards: {
          tags: {
            p1: "Pilot 01",
            p2: "Pilot 02",
            p3: "Pilot 03",
            p4: "Pilot 04",
            p5: "Pilot 05",
            p6: "Pilot 06",
          },
          mscv: {
            title: "Santa Clara-a-Velha Monastery",
            description: "Represents a moment of experimentation with the Gothic style in the country.",
          },
          mnaz: {
            title: "National Tile Museum",
            description: "The National Tile Museum in Lisbon is one of Portugal's most important museums due to its unique collection dedicated to tile art.",
          },
          ma: {
            title: "Royal Monastery of Santa Maria de Alcobaça",
            description: "It is the first fully Gothic work built on Portuguese soil, with construction initiated in 1178 by the Cistercian monks.",
          },
          rrm: {
            title: "Milreu Roman Ruins",
            description: "The Roman Ruins of Milreu or Estói Ruins are an important archaeological site in Estói, Faro municipality, Portugal.",
          },
          mj: {
            title: "Jerónimos Monastery",
            description: "Located in the parish of Belém, in the city and municipality of Lisbon.",
          },
          ge: {
            title: "Escoural Cave",
            description: "Classified as a National Monument since 1963.",
          },
        },
      },
      board: {
        knowMore: "Learn More",
      },
      navbarRepository: {
        home: "Home",
        projectsButton: "Projects",
        mobileProjectsHeading: "Our Projects",
        projects: {
          santaClara: "Santa Clara-a-Velha",
          azulejo: "National Tile Museum",
          escoural: "Escoural Cave",
          hbimResearch: "HBIM Research",
          hbimSegmentation: "HBIM Segmentation",
          milreuReconstruction: "Milreu Reconstruction",
          sensorPlatform: "Sensor Platform",
          sensorFirmware: "Sensor Firmware",
          visitorFlow: "Visitor Flow - Jerónimos",
          modelGallery: "Model Gallery",
        },
      },
      pilotDetail: {
        backButton: "Back",
        resultsHeading: "Project Results",
      },
      pilots: {
        alcobaca: {
          tag: "Pilot 03",
          description:
            "The Monastery of Alcobaça, also known as the Royal Monastery of Santa Maria de Alcobaça, is a monastery located in the city of Alcobaça, in the Western region of Portugal. It is the first fully Gothic structure built on Portuguese soil, with construction initiated in 1178 by the monks of the Order of Cister.",
          results: [
            "Survey conducted with high-density terrestrial LiDAR (Leica RTC 360), aerial and terrestrial photogrammetry, and multiple distributed scanning points",
            "HBIM modeling, encompassing digital twin development, historical metadata integration, and detailed identification of architectural elements",
            "The pilot project focuses on optimizing architectural management and preventive maintenance, utilizing environmental monitoring and IoT data to ensure heritage conservation",
          ],
        },
        azulejo: {
          tag: "Pilot 02",
          description:
            "The National Tile Museum, in Lisbon, is one of the most important museums in Portugal, known for its unique collection dedicated to tiles (azulejos)—a defining artistic expression of Portuguese culture—and for the unique building in which it is housed, the former Convent of Madre de Deus, founded in 1509 by Queen D. Leonor.",
          results: [
            "3D Model of the Santos Simões Room: point cloud and textured model",
            "Testing of Virtual Reality and Augmented Reality applications",
          ],
        },
        gruta: {
          tag: "Pilot 06",
          description:
            "Escoural Cave is a natural cavity known for Paleolithic rock art and burials, located in the village of S. Brissos, in the Alentejo municipality of Montemor-o-Novo, Portugal. It has been classified as a National Monument since 1963.",
          results: [
            "Creation of 3D models of the exterior and interior of the Escoural Cave, including point clouds and mesh models",
            "Integration of virtual tour data (Heritage 360) with terrestrial and aerial LiDAR captures",
            "Focus on environmental parameters monitoring and biological risk analysis",
          ],
        },
        jeronimos: {
          tag: "Pilot 05",
          description:
            "The Monastery of Santa Maria de Belém, better known as Jerónimos Monastery, is a Portuguese monastery commissioned in the late 15th century by King D. Manuel I and handed over to the Order of Saint Jerome. It is located in the parish of Belém, in the city and municipality of Lisbon.",
          results: [
            "Detailed interior and exterior survey using aerial and terrestrial photogrammetry to generate high-density point clouds",
            "Digital twin development focused on flow management optimization and environmental impact mitigation",
            "Integration of IoT sensors for continuous environmental monitoring and validation of results with managers and visitors",
          ],
        },
        milreu: {
          tag: "Pilot 04",
          description:
            "The Roman Ruins of Milreu or Estói Ruins are an important archaeological site in Estói, Faro municipality, Portugal. It consists mainly of the wealthy Roman villa of Sambada or Sambata, with attached baths, and surrounding buildings including a temple, mausoleums, and industrial and commercial structures.",
          results: [
            "Aerial and terrestrial captures (photogrammetry + LiDAR) completed",
            "3D modeled digital twin",
            "Digital reconstruction of architectural elements (master's thesis)",
            "Overlay of the reconstruction model onto the digital twin",
            "Augmented Reality app for outdoor archaeological interpretation",
          ],
        },
        santaClara: {
          tag: "Pilot 01",
          description:
            "The Monastery of Santa Clara of Coimbra, popularly known as Santa Clara-a-Velha Convent, is located on the left bank of the Mondego River, in Coimbra, Portugal. It represents a key moment of Gothic style experimentation in the country.",
          results: [
            "Aerial and terrestrial photogrammetry and LiDAR captures completed",
            "Full digital twin modeling",
            "Historical flood simulation under development",
            "Overlay of flood scenarios with historical data",
            "Analysis of flood impacts leading to the abandonment of the building",
          ],
        },
      },
      login: {
        badge: "Digital Twin Repository",
        title: "Sign In",
        subtitle:
          "Access the centralized documentation center for applications, digital twins, and processing pipelines.",
        usernameLabel: "username",
        usernamePlaceholder: "Ex: admindt, tester",
        passwordLabel: "password",
        submitButton: "Sign In",
        actionText: "Access",
        invalidCredentials:
          "Invalid credentials. Please check your username and password.",
      },
      technology: {
        sectionBadge: "Technologies",
        title: "Tools & Applications",
        description:
          "This section gathers tools and applications being developed within the project, translating scientific research into technological solutions. Here you will find our developments in IoT, 3D modeling, immersive reality, and predictive analytics applied to the cultural sector.",
        stats: {
          projects: "Projects",
          openAccess: "Open Access",
        },
        actions: {
          learnMore: "LEARN MORE",
          details: "Details",
          close: "Close",
        },
        detailsSummary: "Project Overview",
        externalResources: "External Resources",
        projects: {
          iotPlatform: {
            title: "Environmental Monitoring Platform for Cultural Preservation",
            description:
              "Cloud platform for environmental monitoring of cultural heritage, integrating real-time dashboards, IoT, MQTT, and AI predictive analytics.",
            tag: "IoT Platform",
          },
          iotFirmware: {
            title: "Firmware for the Monitoring Platform",
            description:
              "Firmware infrastructure for STM32WB55 sensors and ESP32-S3 gateways with OTA, BLE, MQTT support, and remote IoT device management.",
            tag: "Firmware & Sensors",
          },
          visitorFlow: {
            title: "Flow and Occupancy Monitoring - Jerónimos",
            description:
              "Visitor counting and anonymous heatmap system using ToF and mmWave sensors with distributed IoT architecture (STM32/ESP32).",
            tag: "IoT & Edge Computing",
          },
          hbimSegmentation: {
            title: "3D Model Segmentation for HBIM",
            description:
              "Automated segmentation pipeline for architectural elements in 3D point clouds.",
            tag: "Data Processing",
          },
          hbimSearch: {
            title: "HBIM Research",
            description:
              "Advanced research methodologies in Heritage Building Information Modeling.",
            tag: "Data Processing",
          },
          hbimDev: {
            title: "HBIM Development",
            description:
              "IFC 3D modeling and semantic mapping of pathologies based on point clouds and historical archives.",
            tag: "Data Processing",
          },
          santaClaraSimulator: {
            title: "Santa Clara-a-Velha Monastery Simulator",
            description:
              "Interactive Unity simulation for visualization and comparative analysis of historical floods at Santa Clara-a-Velha Monastery.",
            tag: "Immersive Experiences",
          },
          azulejoXR: {
            title: "AR and VR Applications for the Tile Museum",
            description:
              "Interactive AR platforms for monument recognition and VR portals for immersive exploration of historical environments.",
            tag: "Immersive XR",
          },
          escouralVR: {
            title: "Virtual Reality Tour of Escoural Cave",
            description:
              "Escoural Cave visualization built from 3D capture, navigable in real time.",
            tag: "Immersive Experiences",
          },
          milreu3D: {
            title: "Virtual Reconstruction of the Milreu Roman Ruins",
            description:
              "3D virtual reconstruction of the Milreu Roman Ruins developed in Blender using historical and archaeological references.",
            tag: "Immersive Experiences",
          },
          uxUiProjects: {
            title: "UX & UI Development for Digital Twins Projects",
            description:
              "Process and development of UX and UI design systems for Digital Twins initiatives.",
            tag: "Immersive Experiences",
          },
        },
      },
      technologyPages: {
        actions: {
          back: "Back",
        },
        deployment: {
          title: "Environmental Monitoring Platform for Cultural Preservation",
          subtitle: "IoT Monitoring Platform",
          paragraphs: [
            "The project is developing a cloud platform for environmental monitoring of heritage and cultural spaces, allowing continuous data collection, storage, and analysis from IoT gateways and distributed sensors.",
            "The platform integrates real-time dashboards, time series visualization, interactive maps, remote device configuration, and automated environmental alert systems. It supports MQTT and HTTPS communication for reliable data transmission.",
            "Beyond environmental monitoring, AI tools are incorporated for anomaly detection, predictive analysis, and preventive conservation diagnostic support. The infrastructure was built on Firebase, Google Cloud Run, Firestore, and Vertex AI."
          ]
        },
        firmware: {
          title: "Firmware for Monitoring Platform",
          subtitle: "Firmware and IoT Infrastructure",
          paragraphs: [
            "The Metrozero Firmware project brings together firmwares used across the IoT infrastructure, including STM32WB55-based environmental sensors and ESP32-S3 gateways responsible for collecting and synchronizing environmental data.",
            "The system supports Over-The-Air (OTA) updates, BLE communication between sensors and gateways, local SD card storage, and cloud synchronization via MQTT and HTTPS.",
            "It includes complete flashing procedures, bootloaders, BLE stacks, memory configuration, and deployment documentation for real-world environments."
          ]
        },
        escoural: {
          title: "Virtual Reality Tour of Escoural Cave",
          subtitle: "Immersive Experiences",
          paragraphs: [
            "An immersive visualization of the Escoural Cave, based on photogrammetry and laser-scanning models. Utilizing a real-time game engine, users can interactively explore the cave in a first-person perspective with photo-realistic lighting."
          ]
        },
        hbim: {
          title: "HBIM Development",
          subtitle: "Data Processing and Demonstration: Jerónimos and Santa Clara-a-Velha",
          paragraphs: [
            "A Heritage Building Information Modeling (HBIM) and pathology documentation methodology was developed for Jerónimos Monastery and Santa Clara-a-Velha Monastery using georeferenced 3D point clouds as metric reference.",
            "For Santa Clara-a-Velha Monastery, extensive DWG archives were converted directly into 3D IFC elements via Python scripts (ifcopenshell). At Jerónimos Monastery, historical raster surveys were processed with automated texture filters and ray projection onto the 3D model.",
            "All IFC models and metadata are integrated into a knowledge graph and an open web platform, democratizing access to heritage documentation via spatial queries and SPARQL interrogations."
          ]
        },
        milreu: {
          title: "Virtual Reconstruction of Milreu Roman Ruins",
          subtitle: "Immersive Experiences",
          paragraphs: [
            "Milreu's reconstruction uses documentary historical and archaeological references to model exterior and interior spaces of the Milreu Roman Ruins (RRM).",
            "3D reconstructions were created in Blender (open source) for modeling, texturing, animation, and integration of digitized 3D artifacts from the Património 360º project.",
            "Besides rendered images, the 3D model can be directly inspected using the latest version of Blender."
          ]
        },
        santaClara: {
          title: "Santa Clara-a-Velha Monastery",
          subtitle: "Flood Simulation",
          paragraphs: [
            "A Unity simulation to visualize and demonstrate how historical floods submerged the Santa Clara-a-Velha Monastery, allowing users to view water levels for specific years.",
            "The simulation provides a 3D scene where water levels dynamically adjust alongside a control panel with year selection buttons and interactive water sliders.",
            "Users can pick years from the menu or press numeric keys to adjust water levels and observe changes in real time."
          ]
        },
        segmentation: {
          title: "3D Model Segmentation for HBIM",
          subtitle: "Semantic Integration and Enrichment",
          paragraphs: [
            "This pipeline focuses on automated 'Scan-to-BIM' data capture starting with 2D SAM3 (Segment Anything Model) segmentation assisted by multimodal LLM material inference.",
            "The second stage projects 2D labels onto 3D point clouds using camera intrinsic/extrinsic parameters, ensuring multi-view semantic consistency via majority voting.",
            "Finally, the segmented point cloud generates an optimized HBIM model in IFC format complete with spatial relations and metric metadata."
          ]
        },
        uxUi: {
          title: "UX and UI Development for Digital Twins Projects",
          subtitle: "User Experience and Interface Design",
          paragraphs: [
            "UX/UI development started by establishing key objectives with the Digital Twins team and Monument directors, tailoring solutions to user personas and target audiences.",
            "User flows and low-fidelity wireframes/prototypes were created to test user journeys and bridge conceptual design with engineering implementation.",
            "Design systems, color palettes, typography, interactive UI kits, and implementation guides were established for consistent cross-application experiences."
          ]
        },
        visitorFlow: {
          title: "Flow and Occupancy Monitoring - Jerónimos Monastery",
          subtitle: "IoT, Edge Computing & Privacy",
          paragraphs: [
            "Focuses on intelligent visitor flow monitoring with strict Privacy by Design principles. Time-of-Flight (VL53L1X) and 24 GHz mmWave sensors process occupancy locally on STM32WB55 microcontrollers without capturing facial or device identifiers.",
            "Dual ToF sensor logic counts occupancy via state machine direction validation with median filters and refractory timing.",
            "mmWave radar maps presence on a 12-cell grid using EMA filtering, sending aggregated anonymous heatmaps every 30 seconds via ESP32-S3 gateways."
          ]
        },
        search: {
          title: "HBIM Search & Conversational Assistant",
          subtitle: "Information Extraction and Conversational Queries",
          paragraphs: [
            "A conversational assistant that allows users to query digital BIM/HBIM building models in natural language instead of manually navigating complex files.",
            "Transforms technical model information into a searchable format, returning element counts, material details, and spatial characteristics.",
            "Makes complex BIM information accessible and fast to query for architecture, engineering, and heritage management contexts."
          ]
        },
        azulejo: {
          title: "AR and VR - National Azulejo Museum",
          subtitle: "Immersive Experiences for Tourism",
          experienceTab: "{{type}} Experience",
          vrSubtitle: "Virtual Reality — Visualization of spaces where Azulejos were historically located",
          vrParagraphs: [
            "The VR project uses spatial portals in Unity to connect historical virtual environments.",
            "Contains 3 primary scenes: Hedge App Scene (full museum visit with historical texts), Quick Version (portal transitions focus), and Sample Scene.",
            "Integrates Meta SDK for Meta Quest 3S with gesture teleportation and controller locomotion."
          ],
          arSubtitle: "Augmented Reality — Image detection of Lisbon panorama monuments",
          arParagraphs: [
            "Unity application using AR Foundation image tracking to recognize Lisbon panorama monuments at the museum and trigger interactive UI overlays.",
            "Features 3 main scenes: ImageTracking, MNAz (main application), and SampleScene."
          ]
        }
      },
      projectDetail: {
        back: "Back",
        aboutProject: "About the Project",
        mediaAlt: "Project media",
      },
      repositoryDetail: {
        back: "Back",
        aboutRepo: "About the Repository",
        stars: "Stars",
        forks: "Forks",
        openIssues: "Open Issues",
        license: "License",
        technologies: "Technologies",
        viewOnGithub: "View on GitHub",
        mediaAlt: "Repository media",
        noLicense: "No license specified",
      },
      locations: {
        subheading: "Smart Territories",
        title: "ALL DIGITAL TWINS",
        intro: "Explore our complete heritage network. Click on any of the sites below to discover more information, historical details and to visit the official website.",
        searchPlaceholder: "Search by name or detail...",
        resultsLabel: "Sites Found",
        backButton: "Back",
        emptyTitle: "No site found",
        emptyText: "We found no results for \"{{term}}\". Try other search terms.",
        detailsLabel: "Site Details",
        noDescription: "A detailed description is not available for this site at the moment.",
        visitWebsite: "Visit Official Website",
        items: {
          "casa-corpo-santo": {
            name: "Corpo Santo House",
            description: "Casa do Corpo Santo is a building that housed the Confraternity of Corpo Santo, whose origins date back to the 14th century, with a charter from 1340. In 1714, the date carved above the lintel of the courtyard gate, the confraternity settled in this building, made up of a few rooms granted by the Palace of the Cabedo family, leaning against the 14th-century wall and set in an area of long-standing occupation in the city of Setúbal, namely Largo da Igreja de Santa Maria, overlooking the Santa Maria hill.",
          },
          "casa-museu-anastacio-goncalves": {
            name: "Dr. Anastácio Gonçalves House-Museum",
            description: "The Dr. Anastácio Gonçalves House-Museum is a museum in the city of Lisbon displaying the collection assembled by the physician and collector António Anastácio Gonçalves. The group of some 3,000 works is made up of three major sets: Portuguese painting from the 19th and 20th centuries, Chinese porcelain, and Portuguese and foreign furniture. There are also important sets of civil and sacred goldwork, European painting, Portuguese sculpture, European ceramics, textiles, numismatics, medals, glassware and Swiss and French pocket watches.",
          },
          "castelo-elvas": {
            name: "Elvas Castle",
            description: "Standing at the highest point of the city, Elvas Castle is an Islamic fortification, rebuilt in the 13th and 14th centuries and only taking on its present appearance in the 16th century. It housed the governor of Elvas and was the stage for important events in the country's history, such as peace treaties, exchanges of princesses and royal wedding banquets. Several citizens of Elvas devoted to history and heritage sought to promote its restoration and visibility, starting a process that made Elvas Castle, in 1906, the first Portuguese National Monument.",
          },
          "castelo-guimaraes": {
            name: "Guimarães Castle",
            description: "A symbol of the origins of Portuguese nationhood and of the figure of King Afonso Henriques himself, Guimarães Castle is one of the most representative monuments of the Portuguese medieval imagination. Its initial construction dates back to the time of Mumadona Dias, who ordered it to be built in the mid-10th century in order to defend the Monastery of Santa Maria de Guimarães from Muslim and Norman attacks. That primitive castle, wedged among the granite outcrops, was probably raised in timber, and few traces of it remain.",
          },
          "castelo-viana-alentejo": {
            name: "Viana do Alentejo Castle",
            description: "When granting a charter to Viana do Alentejo in 1313, King Dinis ordered the building of the \"wall enclosure of four hundred fathoms in which the town should stand\", in which three gates were to be opened, donating one thousand pounds for the work (PAIS, 2004, p. 134). The castle structure consists of five curtain walls, finished at the corners by cylindrical turrets topped with spires. The spire crowning the keep is taller than the others and houses a bell chamber with openings on every side.",
          },
          "citania-santa-luzia": {
            name: "Santa Luzia Hillfort",
            description: "The hillfort stands out strategically in the landscape thanks to its prominent location. The area of the settlement corresponds to about a third of what its true extent would have been. It is bounded by three lines of walls, complemented by turrets and two ditches. The distribution of the structures reveals distinct moments of occupation, placing the reorganisation of the space between the 1st century BC and the 1st century AD.",
          },
          "convento-cristo": {
            name: "Convent of Christ",
            description: "Convent of Christ is the name commonly given to the monumental complex made up of the Templar Castle of Tomar, the Renaissance Convent of the Order of Christ, the conventual enclosure, today known as Mata dos Sete Montes, the Chapel of the Immaculate Conception and the conventual aqueduct, also known as the Pegões Aqueduct. Inscribed on the UNESCO World Heritage List in 1983, it includes some of the most expressive testimonies of the history of Portuguese architecture. The seven centuries of its construction span the most significant moments of the history of Portugal.",
          },
          "convento-jesus": {
            name: "Convent of Jesus",
            description: "Opened on 5 February 1961, at the time as the \"City Museum\", the institution was managed until 1977 by the engineer João Botelho Moniz Borba who, initially as provost of the Misericórdia, had proposed to the state authorities the conversion into a museum of the former Convent of Jesus, which had operated as the Espírito Santo Hospital since 1893.",
          },
          "convento-s-salvador-vilar-frades": {
            name: "Convent of São Salvador de Vilar de Frades",
            description: "Few Romanesque elements remain from the first Benedictine monastery founded in the 11th century. In 1425 a congregation of secular canons (Lóios) was founded and based here. The complex was renewed between the 16th and 19th centuries, with notable Manueline ribbed vaults in the body of the church and, in the same style, the beautiful main portal. From the Baroque period come the main altarpiece of the church and valuable 18th-century tiles.",
          },
          "convento-sao-bento-castris": {
            name: "Convent of São Bento de Cástris",
            description: "Built over a modest hermitage dedicated to Saint Benedict, erected in 1169, the Cistercian Convent of São Bento de Cástris, one of the oldest female religious houses in Portugal, dates back to the 14th century, its church having been consecrated in 1328.",
          },
          "estacao-arqueologica-freixo": {
            name: "Freixo Archaeological Site - Tongóbriga",
            description: "For a long time Tongobriga was thought to be a foundation from the time of Emperor Augustus (27 BC - 14 AD) and therefore to have been created in the last years before the Christian era, since earlier remains are very scarce and barely visible. However, following recent work, we now know that there is evidence of sedentary occupation at the base of the southern slope of the settlement since at least the Bronze Age, around the 15th century BC.",
          },
          "igreja-sao-miguel-castelo": {
            name: "Church of São Miguel do Castelo",
            description: "A nationalist historiographical current perpetuated the legend that it was in this church that the baptism of King Afonso Henriques took place. That same legend, by exalting its ancestry, also pushed back the dating of the temple that survives today. In this way, the late Romanesque Church of São Miguel would have been part of the primitive palatial complex of Mumadona Dias, at the turn of the 9th to the 10th century, and would have remained the main temple of comital Guimarães in the time of Henry and Teresa.",
          },
          "mosteiro-sta-maria-pombeiro": {
            name: "Monastery of Santa Maria de Pombeiro",
            description: "Santa Maria de Pombeiro was one of the most important Benedictine monasteries of the Entre-Douro-e-Minho region, founded by Gomes Echiegues and his wife Gontroda in 1102. The church [12th-13th centuries] has three naves, divided by diaphragm arches and with painted timber roofing in the side naves. The original plan of the chancel, rebuilt in the 18th century, was semicircular in the Romanesque manner, as are the still existing apsidioles [secondary chapels].",
          },
          "mosteiro-jeronimos": {
            name: "Jerónimos Monastery",
            description: "A masterpiece of Portuguese architecture, the Royal Monastery of Santa Maria de Belém, commonly known as the Jerónimos Monastery because it was intended for the Order of Saint Jerome, has been classified as a National Monument since 1907 and was inscribed on the UNESCO World Heritage List in 1983. The church, with religious services and visiting hours, and the cloister, secularised in the 19th century, form the most visited heritage complex in the country.",
          },
          "mosteiro-sao-martinho-tibaes": {
            name: "Monastery of São Martinho de Tibães",
            description: "At the beginning of the second millennium, after the Roman period and the Suebi-Visigothic occupation, Benedictine monks from Cluny, supported by the kings of León and Castile and encouraged by the papacy, founded monasteries throughout the Entre-Douro-e-Minho region, replacing the old cenobies and imposing the Roman liturgy. It is in this context that, between 1070 and 1077, the primitive Monastery of Tibães was created, dedicated to Saint Martin of Tours who, born in Pannonia (Hungary) perhaps in 317, was a prolific founder of monasteries and bishop of Tours.",
          },
          "museu-arte-popular": {
            name: "Museum of Popular Art",
            description: "Opened in 1948, the Museum of Popular Art grew out of the reworking of the former pavilion of the Popular Life Section created for the 1940 Exhibition of the Portuguese World, designed by the architects António Reis Camelo and João Simões.",
          },
          "museu-alberto-sampaio": {
            name: "Alberto Sampaio Museum",
            description: "Opened in 1931, the Alberto Sampaio Museum stands in the heart of the historic centre of Guimarães, declared World Heritage in 2001, on the site where in the 10th century countess Mumadona Dias ordered a monastery to be built. In the 12th century, the monastery gave way to a Collegiate Church dedicated to Santa Maria and, later, to Nossa Senhora da Oliveira.",
          },
          "museu-arqueologia-diogo-sousa": {
            name: "D. Diogo de Sousa Archaeology Museum",
            description: "The D. Diogo de Sousa Archaeology Museum has developed its activity in the preservation, valorisation and mediation of local and regional archaeological heritage. It opened to the public on 29 June 2007 in a purpose-built facility, located in the most significant archaeological area of the Roman city of Bracara Augusta. The Museum is the starting point of the visiting route to the nearby archaeological sites open to the public.",
          },
          "museu-arqueologia-etnografia-setubal": {
            name: "Archaeology and Ethnography Museum of the Setúbal District",
            description: "Since its foundation in 1974, the Archaeology and Ethnography Museum of the Setúbal District has been housed in an 18th-century building and, in an adjoining 19th-century building, its Centre for Archaeological Studies.",
          },
          "museu-biscainhos": {
            name: "Biscainhos Museum",
            description: "The Biscainhos Palace is a remarkable example of Portuguese residential architecture, located in the city of Braga. Its evolution spans the 17th and 18th centuries, extending into the 19th century, with expressive interventions in its ornamental interiors, notably tilework, painting and sculpture.",
          },
          "museu-jose-malhoa": {
            name: "José Malhoa Museum",
            description: "The first building in Portugal designed for museum purposes, the José Malhoa Museum presents collections of painting, sculpture and ceramics from the 19th and 20th centuries. The institution also displays the largest gathered group of works by José Malhoa, an artist from Caldas whose naturalist works take the Museum's visitors to an encounter with popular (and singular) figures of Portugal.",
          },
          "museu-nacional-arte-antiga": {
            name: "National Museum of Ancient Art",
            description: "Created in 1884, housed for almost 140 years in the Alvor Palace and with more than a century under its current name, the National Museum of Ancient Art holds the most important Portuguese public collection of European, African and Oriental painting, sculpture, goldwork and decorative arts.",
          },
          "museu-nacional-azulejo": {
            name: "National Tile Museum",
            description: "Created in 1965, it became the National Tile Museum in 1980 and is housed in the former Convent of Madre de Deus. It presents the history of the azulejo in Portugal, protecting and promoting an artistic expression that distinguishes Portuguese culture worldwide.",
          },
          "museu-nacional-teatro-danca": {
            name: "National Museum of Theatre and Dance",
            description: "The National Museum of Theatre and Dance holds the most extensive collection relating to the performing arts in Portugal, and its mission is to encourage and disseminate knowledge about these arts through its collection of more than 300,000 items, including costumes and stage garments, set drawings and models, props, posters and programmes, records and scores, as well as photographs, paintings, sculptures and caricatures.",
          },
          "museu-nacional-traje": {
            name: "National Costume Museum",
            description: "The National Costume Museum brings together a collection of clothing and accessories from the 18th century to the present day, representing various historical periods, styles and trends. It is housed in the Angeja-Palmela Palace, in a former Lisbon leisure estate, and is adjoined by the Monteiro-Mor Botanical Park, created in the 18th century to a design by the Italian Domenico Vandelli.",
          },
          "museu-nacional-coches": {
            name: "National Coach Museum",
            description: "Opened in 2015, the new National Coach Museum was designed by the Brazilian architect Paulo Mendes da Rocha, Pritzker Prize winner in 2006, in partnership with the Portuguese architect Ricardo Bak Gordon. More than a museum, the project works as an urban infrastructure that offers public space to the city of Lisbon.",
          },
          "museu-nacional-etnologia": {
            name: "National Museum of Ethnology",
            description: "The building the Museum currently occupies was inaugurated in 1976, designed by the architect António Saragga Seabra. In 2000, the architect Eduardo Trigo de Sousa shaped the building's extension project, creating a library/media library, two storage areas and the surrounding garden. The new visitable storage areas, the Rural Life Galleries and the Amazonia Galleries, were opened in 2000 and 2006 respectively.",
          },
          "museu-nacional-frei-manuel-cenaculo": {
            name: "Frei Manuel do Cenáculo National Museum",
            description: "It occupies a privileged space in the centre of Évora, a World Heritage city, and has at its origin the collection of Frei Manuel do Cenáculo (1724-1814), an influential intellectual of the Pombaline period, art collector and one of the pioneers of archaeology in Portugal.",
          },
          "paco-duques-braganca": {
            name: "Palace of the Dukes of Bragança",
            description: "The Palace of the Dukes of Bragança, in the city of Guimarães, is a magnificent example of 15th-century manor architecture and the cradle of the House of Bragança. It has been classified as a National Monument since 1910 and includes in its structure a wing used as an official residence of the President of the Republic.",
          },
          "ruinas-casa-rua-burgos": {
            name: "Ruins of the House on Rua de Burgos",
            description: "A wealthy Gothic house from the 16th, 18th, 19th and 20th centuries, with architectural influences from several historical periods; the 18th-century interventions stand out as defining the space, with only a Gothic portal remaining from the period of its construction.",
          },
          "se-braga": {
            name: "Braga Cathedral",
            description: "The collections of the Treasury-Museum of Braga Cathedral bear witness, as a whole, to more than fifteen centuries of the history of art and of the life of the Church in Braga. It holds a valuable collection of goldwork, sculpture, painting, textiles, furniture and ceramics, as well as a whole set of objects linked to Catholic worship.",
          },
          "se-evora": {
            name: "Évora Cathedral",
            description: "The Cathedral terrace is the highest point of the city. From there one can see the whole city, both the historic centre within the walls, with all its heritage, and the new city made up of several neighbourhoods all around. An essential visit to get to know the city of Évora well.",
          },
          "se-portalegre": {
            name: "Portalegre Cathedral",
            description: "The bishopric of Portalegre was created in 1550 by a bull of Pope Julius III, one of the three new dioceses created during the reign of King João III. The first prelate appointed as bishop of the new diocese was D. Julião de Alva, confessor to Queen Catherine.",
          },
          "sitio-arqueologico-castro-cola": {
            name: "Castro da Cola Archaeological Site",
            description: "Castro da Cola has been classified as a National Monument since 1910 and is a fortified settlement with human occupation attested from the Bronze Age to the Late Middle Ages. It very probably corresponds to the settlement of Marachique, mentioned in Islamic sources and referred to in medieval Christian documents until the 13th century, and which was abandoned in the 14th century.",
          },
          "sitio-arqueologico-mirobriga": {
            name: "Miróbriga Archaeological Site",
            description: "Miróbriga was inhabited from at least the Iron Age until the 4th century AD. These ruins stand in an area of privileged visibility that allowed territorial control over a whole region rich in agricultural, maritime and mining resources, so this archaeological site is likely to have played a relatively prominent commercial role.",
          },
          "sitio-arqueologico-sao-cucufate": {
            name: "São Cucufate Archaeological Site",
            description: "Dating from the 1st century AD, this Roman villa was the centre of an agricultural estate where the owner may have lived. With some discontinuities, transformations and adaptations, the occupation of this space continued until the late 18th century and, in an adjoining area to the west, the São Cucufate vegetable garden and its small house were established in contemporary times.",
          },
          "sitio-arqueologico-torre-palma": {
            name: "Torre de Palma Archaeological Site",
            description: "Torre de Palma is a space organised and conceived for rural life. Well structured for agricultural production, it was also a place of retreat and leisure for the owner. The villa itself emerged during the 1st century AD and was occupied until the 5th century.",
          },
          "torre-castelo-evoramonte": {
            name: "Tower of Evoramonte Castle",
            description: "The Tower/Palace of Evoramonte Castle is an imposing masonry construction covered in cement, with a centralised plan and four bastions or ultra-semicircular towers at the corners. Its location, on a well-placed elevation in a wide plain, favoured from early on the establishment of a strategic fortified point which, according to tradition, was of Arab foundation.",
          },
          "se-nova-coimbra": {
            name: "New Cathedral of Coimbra",
            description: "Established in 1542 by the Society of Jesus, it was the Order's first college in Portugal and the largest in the city, also known as the College of the Eleven Thousand Virgins.",
          },
          "se-velha-coimbra": {
            name: "Old Cathedral of Coimbra",
            description: "Coimbra (Aeminium in Roman times) has been an episcopal see since the 5th century, succeeding nearby Conímbriga. Despite its long history, there is no record of the cathedral until the construction of the Cathedral of Santa Maria de Coimbra, begun in 1164 on the initiative of bishop D. Miguel Salomão. It was consecrated in 1184, although the rest of the building was not yet finished, and in 1185 the second king of Portugal, Sancho I, was crowned there. It is the only Portuguese Romanesque cathedral from the time of the Reconquest to have survived relatively intact to the present day.",
          },
          "museu-machado-castro": {
            name: "Machado de Castro National Museum",
            description: "The Machado de Castro National Museum is one of the most important museums in Portugal. It was named in honour of the distinguished Coimbra-born sculptor Machado de Castro (1731-1822). It opened to the public in 1913, with António Augusto Gonçalves as its first director (1913-28). In 1965, the State included it in the list of National Museums, recognising its exceptional quality.",
          },
          "museu-conimbriga": {
            name: "Conimbriga National Museum",
            description: "Opened in 1962 as the Monographic Museum of Conímbriga, it was classified as a National Museum in 2017. The museum area corresponds broadly to the area of the ancient city of Conímbriga (only partly open to the public), including the ruins, both the excavated part and the archaeological reserve, the Museum and some surrounding spaces.",
          },
          "fortaleza-sagres": {
            name: "Sagres Fortress",
            description: "The imposing Fortress of Sagres is the human extension of the natural rock and was for centuries the main stronghold of a geostrategic maritime defensive system. In 1443, the policy of Portuguese expansion in the 15th and 16th centuries led Prince Henry to obtain authorisation from his brother, the regent Pedro, to create the Vila do Infante on the Sagres promontory.",
          },
          "mosteiro-santa-clara-velha": {
            name: "Monastery of Santa Clara-a-Velha",
            description: "The appeal of the way of life proposed by Saint Clare led Dona Mor Dias to found a house of Poor Clares near the Franciscan convent, on the left bank of the river Mondego. On 13 April 1283 she obtained a licence to build a monastery dedicated to Saint Clare and Saint Elizabeth of Hungary, but the assets with which she endowed the convent were disputed by the canons of the monastery of Santa Cruz de Coimbra, giving rise to a long conflict that culminated in the extinction of Dona Mor's monastery in 1311.",
          },
          "real-mosteiro-santa-maria-alcobaca": {
            name: "Royal Monastery of Santa Maria de Alcobaça",
            description: "The foundation of the Abbey of Santa Maria de Alcobaça and its charter date from 8 April 1153, consecrating the domains of the Cistercian Order. Those of the Kingdom of Portugal, with the conquest of the cities of Santarém and Lisbon in 1147, advanced south towards the Tagus line. This required rapid and effective settlement so that the Christian expansion could continue southwards.",
          },
          "ruinas-romanas-milreu": {
            name: "Milreu Roman Ruins",
            description: "Located west of the historic village of Estoi, 8 km from Faro, the Roman Villa of Milreu reveals continuous occupation from the 1st to the 11th century. Knowledge of its history shows that it was inhabited by families of high social and political status, provided with the needs not only of rural daily life but also of a rich leisure culture.",
          },
          "gruta-escoural": {
            name: "Escoural Cave",
            description: "The Escoural Cave is a natural cavity, discovered by chance on 17 April 1963 during quarrying works on the site, made up of several chambers and galleries spread over three different levels. On 25 October 1963 it was classified as a National Monument.",
          },
        },
      },
      modelGallery: {
        subheading: "Data Access",
        title: "DIGITAL TWIN REPOSITORY",
        introPrefix: "Explore the results of the surveys and processing work. Access directly the",
        introConnector: "and",
        introSuffix: "folders available for each site.",
        backButton: "Back",
        filterLabel: "Filter by:",
        filterAll: "All",
        filterData: "Data",
        filterModels: "3D Models",
        filterDemos: "Demos",
        searchPlaceholder: "Search site...",
        spacesBadge: "{{total}} Spaces",
        resourcesLabel: "Resources",
        multipleAreas: "Multiple Areas",
        tooltipData: "Data",
        tooltipModels: "3D Models",
        tooltipDemos: "Demos and Videos",
        emptyTitle: "No results found",
        emptyText: "There are no sites matching your selected combination of filters.",
        clearFilters: "Clear Filters",
        modalSubheading: "File Explorer",
        mainDirectoryLabel: "Main Directory",
        openMainFolder: "Open Main Folder",
        openMainFolderHint: "View all unified files and subdirectories",
        subLocationsLabel: "Sub-locations / Areas",
        resourceSubfoldersLabel: "Resource Subfolders",
        resourceData: "Data",
        resourceModels: "3D Models",
        resourceDemos: "Demos & Videos",
        filesAvailable: "Files Available",
        folderEmpty: "Empty Folder / Unavailable",
        subfolders: {
          mnazModels3d: "MNAZ Complete 3D Models",
          mnazData: "MNAZ Complete Data",
          salaSantosSimoes: "Santos Simões Room",
          panoramaLisboa: "Lisbon Panorama",
          palacioGalveias: "Galveias Palace",
          igrejaSaoLourenco: "Saint Lawrence Church",
          jardimAmoreiras: "Amoreiras Garden",
          hbimMscv: "HBIM MSCV",
        },
        names: {
          "agnostico-museu-nacional-arqueologia": "National Museum of Archaeology",
          "convento-de-cristo": "Convent of Christ",
          "casa-corpo-santo": "Corpo Santo House",
          "castelo-elvas": "Elvas Castle",
          "casa-museu-anastacio-goncalves": "Dr. Anastácio Gonçalves House-Museum",
          "castelo-viana-alentejo": "Viana do Alentejo Castle",
          "convento-de-sao-bento-de-castris": "Convent of São Bento de Cástris",
          "gruta-do-escoural": "Escoural Cave",
          "mosteiro-de-alcobaca": "Alcobaça Monastery",
          "museu-de-arqueologia-e-etnografia-do-distrito-de-setubal": "Archaeology and Ethnography Museum of the Setúbal District",
          "museu-arte-popular": "Museum of Popular Art",
          "museu-nacional-grao-vasco": "Grão Vasco National Museum",
          "mosteiro-dos-jeronimos": "Jerónimos Monastery",
          "museu-nacional-arte-antiga": "National Museum of Ancient Art",
          "museu-nacional-azulejo": "National Tile Museum",
          "museu-nacional-conimbriga": "Conimbriga National Museum",
          "museu-nacional-dos-coches": "National Coach Museum",
          "museu-nacional-etnologia": "National Museum of Ethnology",
          "museu-nacional-etnologia-conimbriga": "National Museum of Ethnology of Conimbriga",
          "museu-nacional-frei-manuel-cenaculo": "Frei Manuel do Cenáculo National Museum",
          "museu-nacional-resistencia-liberdade": "National Museum of Resistance and Freedom",
          "museu-nacional-traje": "National Costume Museum",
          "museu-nacional-teatro-danca": "National Museum of Theatre and Dance",
          "mosteiro-santa-clara-velha": "Monastery of Santa Clara-a-Velha",
          "panteao-nacional": "National Pantheon",
          "ruinas-casa-rua-burgos": "Ruins of the House on Rua de Burgos",
          "ruinas-romanas-milreu": "Milreu Roman Ruins",
          "sitio-arqueologico-sao-cucufate": "São Cucufate Archaeological Site",
          "sitio-arqueologico-torre-palma": "Torre de Palma Archaeological Site",
          "se-braga": "Braga Cathedral",
          "se-evora": "Évora Cathedral",
          "se-lisboa": "Lisbon Cathedral",
          "se-portalegre": "Portalegre Cathedral",
          "torre-castelo-evoramonte": "Tower of Evoramonte Castle",
          "concatedral_miranda_douro": "Co-Cathedral of Miranda do Douro",
          "citania-santa-luzia": "Santa Luzia Hillfort",
          "convento-sao-salvador-vilar-frades": "Convent of São Salvador de Vilar de Frades",
          "estacao-arquologica-tongobriga": "Freixo Archaeological Site of Tongóbriga",
          "ermida-nossa-senhora-guadalupe": "Chapel of Nossa Senhora de Guadalupe",
          "fortaleza-sagres": "Sagres Fortress",
          "museu-abade-bacal": "Abade de Baçal Museum",
          "museu-nacional-soares-reis": "Soares dos Reis National Museum",
          "mosteiro-sao-joao-tarouca": "Monastery of São João de Tarouca",
          "mosteiro-batalha": "Batalha Monastery",
          "museu-setubal-convento-jesus": "Setúbal Museum and Convent of Jesus",
          "mosteiro-santa-maria-salzedas": "Monastery of Santa Maria de Salzedas",
          "mosteiro-santa-maria-pombeiro": "Monastery of Santa Maria de Pombeiro",
          "palacio-nacional-mafra": "Mafra National Palace",
          "sitio-arqueologico-castro-cola": "Castro da Cola Archaeological Site",
          "sitio-arqueologico-mirobriga": "Miróbriga Archaeological Site",
          "se-lamego": "Lamego Cathedral",
          "se-nova-coimbra": "New Cathedral of Coimbra",
          "santuario-panoias": "Panóias Sanctuary",
          "se-porto": "Porto Cathedral",
          "se-viseu": "Viseu Cathedral",
          "museu-biscainhos": "Biscainhos Museum",
          "museu-jose-malhoa": "José Malhoa Museum",
          "museu-nacional-coches-picadeiro-real": "National Coach Museum - Royal Riding Arena",
          "museu-nacional-musica": "National Music Museum",
          "centro-nacional-arqueologia-nautica-subaquatica": "National Centre for Nautical and Underwater Archaeology",
          "domus-municipalis": "Domus Municipalis",
          "museu-arqueologia-d-diogo-sousa": "D. Diogo de Sousa Archaeology Museum",
          "museu-alberto-sampaio": "Alberto Sampaio Museum",
          "museu-nacional-arte-contemporanea": "National Museum of Contemporary Art",
          "museu-nacional-machado-castro": "Machado de Castro National Museum",
          "palacio-nacional-ajuda": "Ajuda National Palace",
          "torre-belem": "Belém Tower",
          "mosteiro-sao-martinho-tibaes": "Monastery of São Martinho de Tibães",
          "se-velha-coimbra": "Old Cathedral of Coimbra",
        },
      },
      projects: {
        deployment: {
          title: "Environmental Monitoring Platform for Cultural Preservation",
          subtitle: "IoT Monitoring Platform",
          description: [
            "The project is developing a cloud platform for environmental monitoring of heritage and cultural spaces, allowing continuous data collection, storage, and analysis from IoT gateways and sensors distributed across the monitored site.",
            "The platform features real-time dashboards, time-series visualization, interactive maps, remote device configuration, and automated environmental alert systems. It supports communication via MQTT and HTTPS, ensuring redundancy and reliability in data transmission.",
            "Beyond environmental monitoring, the project incorporates artificial intelligence tools for anomaly detection, predictive analysis, and preventive conservation diagnostic support. The infrastructure was developed using Firebase, Google Cloud Run, Firestore, and Vertex AI, enabling high scalability and integration with low-power IoT devices."
          ],
          githubRepoLabel: "GitHub Repository (Code and Documentation)",
        },
        firmware: {
          title: "Monitoring Platform Firmware",
          subtitle: "Firmware and IoT Infrastructure",
          description: [
            "The Metrozero Firmware project brings together the set of firmwares used in the Metrozero IoT infrastructure, including environmental sensors based on the STM32WB55 and ESP32-S3 gateways responsible for collecting and synchronizing environmental data.",
            "The system supports Over-The-Air (OTA) updates, BLE communication between sensors and the gateway, local SD card storage, and cloud synchronization via MQTT and HTTPS. The architecture was designed for continuous monitoring scenarios in cultural heritage and museum environments.",
            "In addition to the main firmware, the project includes complete flashing procedures, bootloaders, BLE stacks, memory configuration, and real-world deployment documentation. The system was implemented in monitoring campaigns at Jerónimos, supporting multiple simultaneous sensors with remote management and automatic updates."
          ],
          mainRepoLabel: "Main Repository (Code and Documentation)",
          devSharepointLabel: "HW-FW-SW Development",
        },
        escoural: {
          title: "Virtual Reality Tour of the Escoural Cave",
          subtitle: "Immersive Experiences",
          description: [
            "Immersive visualization of the Escoural Cave, based on a model captured using photogrammetry and laser scanning. Powered by a game engine, the cave model is lit in real time with photorealistic fidelity, allowing users to interactively explore different areas from a first-person perspective."
          ],
          modelAppLinkLabel: "Virtual Tour Model and Application",
        },
        hbim: {
          title: "HBIM Development",
          subtitle: "Data Processing and Demonstration: Jerónimos and Santa Clara-a-Velha",
          description: [
            "As part of this project, a Historic Building Information Modeling (HBIM) methodology and pathology documentation process was developed, focusing on the case studies of Jerónimos Monastery and Santa Clara-a-Velha Monastery. The process relies on georeferenced 3D point clouds as a fundamental metric reference, enabling the creation and deformation of parametric element types (walls, beams, pillars) to closely match the real building surfaces.",
            "For Santa Clara-a-Velha Monastery, the extensive DWG vector archive (1998-2008) was converted directly into 3D IFC elements via Python scripts (ifcopenshell), preserving layer classification and creating a semantic record of damage and interventions. At Jerónimos Monastery, raster graphic surveys from 1999 were processed using automated extraction and classification of pathology hatch patterns via texture filters and ray casting onto the 3D model, generating standardized semantic annotations according to HeritageCare and Damage Ontology taxonomies.",
            "All IFC models and their metadata (including over 150 historical documents and reports) are integrated into a knowledge graph and an open web visualization platform. The system democratizes access to heritage records via any browser, enabling spatial queries, SPARQL requests, and new conservation workflows — from in situ mobile damage annotation to exporting BCF topics for site management."
          ],
          jeronimosViewerLabel: "HBIM Viewer — Jerónimos Monastery",
          mscvViewerLabel: "HBIM Viewer — Santa Clara-a-Velha Monastery",
          ifcDocsLabel: "IFC Structures and Documentation (OneDrive)",
        },
        milreu: {
          title: "Reconstruction of the Milreu Roman Ruins",
          subtitle: "Immersive Experiences",
          description: [
            "The reconstruction of Milreu relies on documentary research of historical and archaeological references to survey the site. The project aims to rebuild several areas of the Milreu Roman Ruins (RRM), both outdoor and indoor. This enhances visitor experience by allowing better spatial exploration, greater audience engagement, and museum mediation that further highlights its historical, artistic, and cultural value.",
            "To achieve this, 3D reconstructions are produced using Blender, an open-source application that allows for 3D modeling, texturing, and animation. The software also simplifies importing 3D object models digitized during the Património 360º project that were part of the RRM, as well as exporting rendered images for infographics and audiovisual media.",
            "In addition to the available images, the 3D model can be explored directly in Blender. You should install the latest version of the program and open the attached file."
          ],
          versions: {
            normal: "Standard",
            evidence: "Historical-Archaeological Evidence",
          },
          links: {
            peristilo: "View 3D Model (Peristyle)",
            atrio: "View 3D Model (Atrium)",
            termas: "View 3D Model (Baths)",
            culto: "View 3D Model (Cult Building)",
            triclinio: "View 3D Model (Triclinium)",
            contentAccess: "Access to the content of the Milreu Roman Ruins",
            arApp: "Augmented Reality Application for the Milreu Roman Ruins",
          },
        },
        santaClara: {
          title: "Santa Clara-a-Velha Monastery",
          subtitle: "Flood Simulation",
          description: [
            "Unity simulation to visualize, explore, and demonstrate how different historical floods inundated the Santa Clara-a-Velha Monastery. It allows users to view water levels for specific years and compare flood events over time.",
            "The simulation features a 3D scene where the water surface rises and falls according to the selected year; a control panel with buttons for selecting years, event descriptions, and a slider to adjust the water level within that year's range.",
            "Users can select a year by clicking the menu buttons or using number keys (1..9 and 0 for the 10th). The slider adjusts the water level, updating the 3D scene in real time."
          ],
          driveLinkLabel: "Project Drive Folder",
        },
        search: {
          title: "Search for HBIMs",
          subtitle: "HBIM Information Extraction and Conversational Querying",
          description: [
            "This project is a tool designed to query and explore digital building models through a conversational interface. Instead of forcing users to manually navigate complex BIM/HBIM files, the application allows asking natural language questions about model elements, such as walls, stairs, materials, floors, classifications, or quantities.",
            "The solution transforms technical model information into a searchable format and exposes it via an assistant. Users can request element lists, ask about specific parameters, retrieve counts by element type or material, and request further details on any found result.",
            "Overall, the project aims to make BIM information more accessible, fast to query, and useful for analysis. It is especially relevant for architecture, engineering, built heritage, and facility management contexts, where large amounts of technical model data exist but are not always easy to locate or directly interpret."
          ],
          githubRepoLabel: "Main Repository (Pipeline and Documentation)",
        },
        segmentation: {
          title: "Segmentation for HBIMs",
          subtitle: "Semantic Integration and Enrichment",
          description: [
            "This pipeline focuses on automating data acquisition through a 'Scan-to-BIM' approach. The process begins with 2D Segmentation using the SAM3 (Segment Anything Model) guided by class prompts. To boost precision, we integrated a Multimodal LLM that filters noise and improves material inference, enabling the identification of specific artifacts based on the museum's visual collection.",
            "In the second stage, Label Projection to the Point Cloud takes place. Using intrinsic and extrinsic camera parameters, we project 2D mask labels directly onto 3D points. Semantic consistency across the cloud is maintained through a multi-view fusion process based on majority voting, resolving discrepancies between different photo perspectives.",
            "Finally, we execute the HBIM (Heritage Building Information Modeling) Model Generation. The segmented point cloud is cleaned and simplified for performance optimization, grouping classes into fundamental geometric shapes. The result is a precise BIM-compliant Digital Twin featuring complex spatial relationships (IFCRelations) and accurate metric metadata for building management."
          ],
          githubRepoLabel: "Main Repository (Pipeline and Documentation)",
          resultsLabel: "Projection and HBIM Results and Tests",
        },
        visitorFlow: {
          title: "UX/UI Development for Digital Twins Projects",
          subtitle: "User Experience and User Interface",
          description: [
            "The user experience (UX) and user interface (UI) development process began with understanding project goals through collaboration with the Digital Twins team and monument managers. Once key objectives were established for both sides, target audiences and project constraints were taken into account.",
            "Multiple user flows were developed to address identified challenges and deliver a seamless user experience from the outset.",
            "With these flows defined, ideas were translated into low-fidelity wireframes and prototypes to evaluate and refine proposed solutions. These prototypes served as a bridge between conceptual design and final implementation. For one project, a user study was conducted to provide additional context and insights for improvement.",
            "Once the experience was defined, implementation planning began. This involved evaluating hardware constraints, site usage conditions, and physical environments. The design aimed to be easily recognizable and coherent, referencing real-world materials while matching the local context of each project component. Additional features were incorporated during this phase after re-evaluating context requirements.",
            "Design systems—including color palettes, typography, and interactive components—were defined for each application along with main page layouts. These elements were standardized to maintain visual consistency across each interface.",
            "Finally, implementation guides were created to help developers accurately integrate and render the graphic elements."
          ],
          docsLinkLabel: "Development, Assets, and Technical Documentation (OneDrive)",
        },
        visitorFlow2: {
          title: "Flow and Occupancy Monitoring - Jerónimos Monastery",
          subtitle: "IoT, Edge Computing & Privacy",
          description: [
            "This project focuses on intelligent visitor flow monitoring at the Jerónimos Monastery, grounded in strict 'Privacy by Design' principles. The system uses Time-of-Flight (VL53L1X) and 24 GHz mmWave sensors to capture occupancy metrics without collecting facial images, identities, or mobile device identifiers. The firmware infrastructure was built for STM32WB55 microcontrollers, ensuring local edge processing before transmitting anonymous aggregated data.",
            "The counting subsystem implements a dual-ToF sensor setup sampling at 20 Hz. To guarantee accuracy, raw signals pass through a median filter and a state machine that validates movement direction (In/Out) using timing differentials (tA < tB). The algorithm incorporates 1200 ms refractory periods and direction timeouts to eliminate false triggers, enabling low-power, high-reliability real-time occupancy tracking in transit zones.",
            "To generate Anonymous Heatmaps, 24 GHz mmWave radars connected via UART map human presence across a 12-cell grid (4x3). An Exponential Moving Average (EMA) filter (alpha = 0.35) smooths signal noise and pinpoints dwell areas. Data is aggregated in 30-second windows and sent through ESP32-S3 gateways using MQTT and BLE protocols, enabling remote management and Over-the-Air (OTA) firmware updates."
          ],
          docsLinkLabel: "Code and Technical Documentation (OneDrive)",
        },
        azulejo: {
          title: "AR and VR - National Tile Museum",
          mainSubtitle: "Immersive Experiences for Tourism",
          tabLabel: "{{tab}} Experience",
          backButton: "Back",
          resourcesHeader: "{{tab}} Resources",
          vr: {
            subtitle: "Virtual Reality — Visualization of spaces where the Tiles were historically located",
            description: [
              "The VR project for the Tile Museum uses portals to connect environments rendered on different layers (in Unity, layers are mapped to hide or display distinct virtual spaces).",
              "The project features 3 scenes:\n- Hedge App Scene - Contains the main extended museum tour application, featuring tile documentation texts and portal transitions to 3 models: Amoreiras Garden, Galveias Palace, and Saint Lawrence Church.\n- Quick Version - Identical to Hedge App Scene but omits tile texts, focusing strictly on seamless environment transitions.\n- Sample Scene - Test scene.",
              "The project integrates the Meta SDK for Oculus Meta Quest 3S headsets, featuring hand-gesture teleportation and controller navigation within the virtual space."
            ],
            linkLabel: "Project Code/Documentation (OneDrive)",
          },
          ar: {
            subtitle: "Augmented Reality — Image detection of Lisbon panorama monuments",
            description: [
              "Unity application developed to recognize images of monuments within the Lisbon panorama at the National Tile Museum, displaying historical information about tiles originally installed in those locations.",
              "The application leverages AR Foundation to execute image tracking. When images from the stored panorama library are recognized, interactive UI components are instantiated to show details about the monument.",
              "The project features 3 scenes:\n- ImageTracking - Adapted from AR Foundation documentation to showcase practical image tracking functionality.\n- MNAz - Primary scene running image recognition on the Lisbon panorama.\n- SampleScene - Test scene."
            ],
            linkLabel: "Project Code/Documentation (OneDrive)",
          },
        },
      },
      aboutDetailed2: {
        subheading: "About the Project",
        title: "More Information",
        heroText: "Main presentation text here...",
        objectiveText: "Objectives text...",
        conservationTitle: "Conservation and Restoration",
        conservationParagraph1: "Paragraph 1...",
        conservationParagraph2: "Paragraph 2...",
        applicationTitle: "Practical Applications",
        applicationIntro: "Application intro...",
        generalScopeLabel: "General Scope",
        generalScopeText: "General scope description...",
        advancedScopeLabel: "Advanced Scope",
        advancedScopeText: "Advanced scope description...",
        whitePaperText: "White paper information...",
        ecosystemQuote: "Relevant ecosystem quote...",
        consortiumTitle: "Consortium",
        institutionsTitle: "Institutions",
        researchUnitsTitle: "Research Units and Partners",
        roles: {
          pi: "Principal Investigator",
        },
      },
      projectDetail2: {
        backButton: "Back",
        aboutSectionTitle: "About the Project",
        linksSectionTitle: "Documentation/Links",
        modalDisclaimer: "Model optimized for fast web browsing. Official version on OneDrive.",
        downloadModelButton: "Download Full Model",
        loadingText: "Loading {{progress}}%",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Default language
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;