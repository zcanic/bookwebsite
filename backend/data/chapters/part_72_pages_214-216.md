# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第72部分

**原始页码**: 214 - 216
**段落数量**: 9
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 213-213 (1703 字符)
- **后文上下文页码**: 217-217 (1977 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. **Breakout scenarios**：译为“定制场景”，指比标准化流程更复杂、需要人工编写代码介入的扩展逻辑场景。
2. **Core Data Model (CDM) Views**：译为“核心数据模型视图”。
3. **Modification-free**：译为“无修改”，这是ERP开发中的重要概念，指通过扩展（Extension）而非直接修改标准代码（Modification）来实现功能，以保证系统升级的稳定性。
4. **Key User**：译为“关键用户”，指具有一定技术权限的业务专家，通常负责低代码/无代码的扩展工作。
5. **On-premise**：译为“本地部署”，与云部署（Cloud deployment）对应。

---

extensibility. However, to enable generic handling, the signatures of training APIs are uniform and do not include any business process-related parameters. As a result, there is no use case for extensibility concerning the training APIs. The situation differs for data extraction APIs, which can be extended as additional fields will be taken into account for model training. Data extraction APIs are built on core data model views for data extraction. To extend such an API, the underlying core data model view must be extended first. As the core data model view extraction is based on generic data integration technology (refer to the data integration chapter), extending the core data model view automatically adapts the API and the consuming artificial intelligence technology platform functionality. This allows the consumer to access the extended fields while the data integration processes continue to function, ensuring the extensibility of the data extraction API.

**【译文】** 然而，为了实现通用处理，训练 API 的签名必须保持统一，且不包含任何与业务流程相关的参数。因此，对于训练 API 来说，不存在扩展性的应用场景。但数据提取 API 的情况则不同，它是可以扩展的，因为模型训练需要考虑额外的字段。数据提取 API 构建于用于数据提取的核心数据模型（Core Data Model）视图之上。要扩展此类 API，首先必须扩展底层的核心数据模型视图。由于核心数据模型视图的提取基于通用的数据集成技术（请参考数据集成章节），扩展核心数据模型视图会自动适配 API 以及消费该数据的 AI 技术平台功能。这使得消费端能够访问扩展后的字段，同时数据集成流程仍能正常运行，从而确保了数据提取 API 的可扩展性。

---

12.2.4 New Artificial Intelligence App
The initial step involves working with application data. In most cases, the standard ERP tables are adequate and can be repurposed. If there is a need for custom tables, the Customer Business Object application, as previously mentioned, can be used. New core data model views can be built on top of the application tables using the recommended Custom Core Data Model Views app. In this context, existing core data model views can be reused. Intelligent scenarios serve as the central element for managing the life cycle of all development objects. The Intelligent Scenario Lifecycle Management framework can be used to create this artifact. Since an intelligent scenario always represents a single use case for artificial intelligence, existing intelligent scenarios cannot be reused. The way the artificial intelligence logic (e.g., data transformations, feature reduction) and inference API are provided varies based on the underlying library:

**【译文】** 12.2.4 新建人工智能应用
第一步涉及应用数据的处理。在大多数情况下，标准的 ERP 表就足够了，可以直接复用。如果需要自定义表，可以使用前文提到的“自定义业务对象（Customer Business Object）”应用。可以使用推荐的“自定义核心数据模型视图”应用，在应用表之上构建新的核心数据模型视图。在此过程中，现有的核心数据模型视图可以被重用。智能场景（Intelligent Scenarios）是管理所有开发对象生命周期的核心要素，可以使用智能场景生命周期管理（ISLM）框架来创建此工件。由于一个智能场景总是代表一个单一的 AI 用例，因此现有的智能场景无法被重用。提供 AI 逻辑（例如数据转换、特征降维）和推理 API 的方式因底层库而异：

---

• Automated Library
• In the context of the intelligent scenario, the inference API is defined and generated during the activation step. The Intelligent Scenario Lifecycle Management framework provisions the core data model view and a corresponding coding class as a result of the generation. Therefore, no custom coding is necessary. This also applies to the artificial intelligence logic related to transformation or feature reduction, as automated libraries (e.g., AutoML) integrate these data science activities into the library implementation itself.

**【译文】** • 自动化库（Automated Library）
在智能场景中，推理 API 是在激活步骤中定义和生成的。作为生成结果，智能场景生命周期管理框架会提供核心数据模型视图和相应的代码类。因此，无需编写自定义代码。这也适用于与转换或特征降维相关的 AI 逻辑，因为自动化库（例如 AutoML）已将这些数据科学活动集成到了库的实现本身中。

---

• Service Library
• This library is used for more complex breakout scenarios than those based on automated libraries. The artificial intelligence logic and inference API are implemented as a coding class with a specified interface. As a result, developers can extend or replace data transformations or post-processing according to the data scientists’ specifications. The predefined interfaces ensure that the implementation is standardized and can be systematically managed by the Intelligent Scenario Lifecycle Management framework.

**【译文】** • 服务库（Service Library）
该库用于处理比自动化库更复杂的定制场景（breakout scenarios）。AI 逻辑和推理 API 被实现为具有指定接口的代码类。因此，开发人员可以根据数据科学家的规范，扩展或替换数据转换或后处理逻辑。预定义的接口确保了实现的标准化，并能由智能场景生命周期管理框架进行系统化管理。

---

• AI Technology Platform
• For advanced scenarios, such as image recognition or language processing, which require neural networks, GPUs, and external data, the artificial intelligence technology platform is utilized. The artificial intelligence logic and inference APIs are modeled graphically based on pipelines. Core data model views for extraction can also be integrated into these pipelines to access training data. The same principle applies if the pipelines are coded rather than graphically modeled.

**【译文】** • AI 技术平台（AI Technology Platform）
对于需要神经网络、GPU 和外部数据的高级场景（如图像识别或自然语言处理），则使用 AI 技术平台。AI 逻辑和推理 API 基于管道（Pipelines）进行图形化建模。用于提取数据的核心数据模型视图也可以集成到这些管道中，以便访问训练数据。如果管道是通过代码而非图形化建模实现的，同样的原则也适用。

---

Before initiating training jobs, readiness checks are conducted to confirm that all necessary prerequisites are met, such as having sufficient application data for model training. These readiness checks are developed as coded classes. The previously mentioned extension point approach should be used for the readiness check implementation class. If the existing applications offer the required extension points, the inference API can be directly integrated into the business processes. As a result, all design-time artifacts can be implemented to support a new artificial intelligence application by customers and partners.

**【译文】** 在启动训练任务之前，会执行就绪检查（Readiness Checks），以确认是否满足所有必要的先决条件，例如是否有足够的应用数据用于模型训练。这些就绪检查是作为代码类开发的。对于就绪检查的实现类，应使用前文提到的扩展点方法。如果现有应用程序提供了所需的扩展点，推理 API 就可以直接集成到业务流程中。这样，客户和合作伙伴就可以实现所有的设计时工件，以支持新的人工智能应用程序。

---

12.2.5 Extensibility Life Cycle Management
Extensibility life cycle management falls under the umbrella of solutions and tools designed for general life cycle management. There are no specific concerns related to artificial intelligence that need to be addressed. As such, we will only provide a few general observations in this context. All essential user extensibility components should adhere to the principles of decoupled extensions:
• Customers must be able to use all extensibility features without manual intervention after an ERP software update; this means that ERP software updates are not dependent on customer adaptations.
• Extensibility objects should never block an update of the core ERP software.

**【译文】** 12.2.5 扩展性生命周期管理
扩展性生命周期管理属于通用生命周期管理解决方案和工具的范畴。在此并没有需要解决的特定于 AI 的问题。因此，我们仅在此提供一些通用的观察。所有基本的用户扩展组件都应遵循“解耦扩展”的原则：
• ERP 软件更新后，客户必须无需手动干预即可使用所有扩展功能；这意味着 ERP 软件的更新不应依赖于客户的适配。
• 扩展对象绝不能阻碍核心 ERP 软件的更新。

---

To uphold these fundamental principles, custom artifacts must conform to the following guidelines:
• Custom artifacts should be technically free of modifications; they are created as own objects that reference the base object.
• Custom artifacts should be technically conflict-free. Additionally, extensions should not conflict with parts of the core ERP objects added later, nor should they conflict with extensions from different extending parties. This requirement is met by using a unique namespace that is taken into account at every level of the architecture.
• Custom artifacts should only utilize released, stable ERP extension points and APIs. This can be ensured through object/code checks. On the ERP side, checks prevent incompatible changes to objects marked as released/extensible and previously delivered. A deprecation mechanism is necessary since, over time, incompatible changes may be needed for the API, such as due to changes in underlying business processes or database tables. Since such incompatible changes disrupt existing applications, they must be notified in advance that the current API will be deprecated and replaced with a new one. This allows consumers ample time to react to the incompatible changes.

**【译文】** 为了坚持这些基本原则，自定义工件必须符合以下准则：
• 自定义工件在技术上应是“无修改（modification-free）”的；它们应作为独立对象创建，并引用基础对象。
• 自定义工件在技术上应是无冲突的。此外，扩展不应与后来添加的核心 ERP 对象部分发生冲突，也不应与来自不同扩展方的扩展发生冲突。这一要求通过在架构的每一层使用唯一的命名空间来满足。
• 自定义工件应仅使用已发布且稳定的 ERP 扩展点和 API。这可以通过对象/代码检查来确保。在 ERP 侧，检查机制可以防止对已标记为“发布/可扩展”且已交付的对象进行不兼容的更改。由于底层的业务流程或数据库表可能会发生变化，API 随着时间的推移可能需要进行不兼容的更改，因此弃用机制（deprecation mechanism）是必要的。由于此类不兼容的更改会中断现有应用程序，因此必须提前通知消费者当前的 API 将被弃用并由新的 API 取代。这为消费者留出了充足的时间来应对这些不兼容的更改。

---

For business-critical applications, extensions are usually developed and tested before being activated for all users in the production environment. In cloud deployment, the key user transports extensibility objects from the test to the production system without interacting with the service provider and outside the service provider’s maintenance window. In an on-premise environment, customers have much more flexibility in development and system landscape setup, as well as quality assurance processes. As a result, customers can manage ERP updates and customer transports for key user extensibility using traditional transport tools. Extensions created with key user tools can be combined with transports featuring custom development done with classic development tools.

**【译文】** 对于关键业务应用程序，扩展通常需要经过开发和测试，然后才能在生产环境中对所有用户激活。在云部署模式下，关键用户（Key User）将扩展对象从测试系统传输到生产系统，此过程无需与服务提供商交互，且在服务提供商的维护窗口之外进行。在本地部署（On-premise）环境中，客户在开发、系统架构设置以及质量保证流程方面拥有更大的灵活性。因此，客户可以使用传统的传输工具来管理 ERP 更新和关键用户扩展的客户传输。使用关键用户工具创建的扩展可以与包含通过经典开发工具完成的自定义开发的传输相结合。

---

