# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第54部分

**原始页码**: 160 - 162
**段落数量**: 6
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 159-159 (2701 字符)
- **后文上下文页码**: 163-163 (788 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Artifacts: 译为'工件'，指软件开发过程中产生的各种产物（如模型、代码、文档等）。
2. Intelligent Scenario: 译为'智能场景'，SAP等ERP系统中特指封装了AI功能的业务场景单元。
3. Side-by-side artificial intelligence: 译为'并行式人工智能'，指AI服务与核心ERP系统解耦运行的架构模式（相对于Embedded嵌入式）。
4. Consumption API: 译为'消费API'，指供应用程序调用以使用模型推理服务的接口。

---

• Which artifacts, unique to artificial intelligence, demand particular attention in terms of life cycle management?
• What are the processes associated with managing the life cycle of these artifacts?
• Who initiates these processes, and in what manner are they activated?

**【译文】** • 哪些人工智能特有的工件（Artifacts）在生命周期管理中需要特别关注？
• 与管理这些工件的生命周期相关的流程有哪些？
• 谁负责启动这些流程，以及它们是如何被激活的？

---

8.2.1 Artifacts, Processes, and Roles

**【译文】** 8.2.1 工件、流程与角色

---

Once the prerequisite checks are successfully completed, the training process is initiated. This involves utilizing the training infrastructure, which extracts the essential metadata from the relevant intelligent scenario, executes the training, and saves the trained model. The inference infrastructure supplies the consumption API tailored to the particular scenario and model, allowing the artificial intelligence functionality to be incorporated into applications and business processes.

**【译文】** 一旦顺利完成先决条件检查，训练流程即刻启动。该过程涉及利用训练基础设施，从相关的智能场景中提取必要的元数据，执行训练，并保存训练好的模型。推理基础设施（inference infrastructure）则提供针对特定场景和模型定制的消费API，从而允许将人工智能功能集成到应用程序和业务流程中。

---

Furthermore, the framework provides a cohesive operational experience for both embedded artificial intelligence and the side-by-side artificial intelligence approach, based on intelligent scenarios.

**【译文】** 此外，基于智能场景，该框架为嵌入式人工智能（Embedded AI）和并行式人工智能（Side-by-Side AI）模式提供了统一的运营体验。

---

...the platform-specific REST APIs in a native manner. The AI technology platform offers a range of REST APIs for various aspects, such as artificial intelligence scenarios, training, deployment, and metrics. The AI life cycle management framework consumes and orchestrates these APIs to present a more straightforward view for non-­experts in artificial intelligence when operating side-by-side intelligent scenarios. The framework presumes that the connection between the AI technology platform and the ERP system is set up beforehand, complete with the necessary authorizations and valid authentications, for instance, exchanging data for model training or batch inference. The framework includes the following applications, as depicted in Fig. 8.3:

**【译文】** （...以原生方式使用特定于平台的REST API。）AI技术平台提供了涉及人工智能场景、训练、部署和指标等各方面的各类REST API。AI生命周期管理框架通过调用并编排这些API，为操作并行式智能场景的非AI专家呈现更直观的视图。该框架假设AI技术平台与ERP系统之间的连接已预先设置完毕，并具备必要的授权和有效认证，例如用于模型训练的数据交换或批量推理。如图8.3所示，该框架包含以下应用程序：

---

• Intelligent Scenarios
With this application, developers can establish intelligent scenarios in the AI life cycle management framework, including basic details and a class that refers to the code for artificial intelligence logic (e.g., data transformations or consumption behavior). Customers and partners can access this application to develop their own intelligent scenarios.

**【译文】** • 智能场景（Intelligent Scenarios）
通过此应用程序，开发人员可以在AI生命周期管理框架中建立智能场景，包括基本详细信息和一个引用人工智能逻辑代码（例如数据转换或消费行为）的类。客户和合作伙伴可以使用此应用程序来开发他们自己的智能场景。

---

