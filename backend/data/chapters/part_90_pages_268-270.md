# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第90部分

**原始页码**: 268 - 270
**段落数量**: 11
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 267-267 (106 字符)
- **后文上下文页码**: 271-271 (3141 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Cockpit: 译为'驾驶舱'，是SAP等ERP系统中常用的术语，指代集中控制和监控的界面。 2. Background inference: 译为'后台推理'，指AI模型在后台运行推理过程，不干扰前台操作。 3. Overfitting/Underfitting: 译为'过拟合/欠拟合'，机器学习标准术语。 4. Accessibility: 译为'无障碍访问'，指软件设计考虑到残障人士的使用需求。 5. Efficient vs Effective: 分别译为'有效率'和'有成效'，前者侧重速度和资源利用，后者侧重结果和目标的达成。

---

scope. This user interface is composed of four main sections: a search area, a list page, a detailed view, and an action section. Within the search area, users have the ability to establish filter criteria to aid in the discovery of available intelligent scenarios. Examples of these search criteria could be the name of the intelligent scenario, the package it belongs to, or its current status. Intelligent scenarios that meet the established search criteria are displayed on the left-hand side of the cockpit. Users can then select the intelligent scenario that is relevant to them, and detailed information about it will be displayed on the right-hand side of the cockpit. The table in this section shows the response of the activated and validated model for each request. If available, direct feedback from the model’s user can also be shown. Users have the ability to navigate to the request and compare the responses of both the activated and validated models. This comparison is facilitated by precomputed KPIs and a time-dependent display of the responses. Users also have the option to define their own KPIs or apply additional data science methods to the request and response data. Based on the analysis of this data, users can initiate various actions. These actions could include keeping the current active model, shifting to the validation model if it proves to be more accurate, or postponing the decision until more data are gathered.

**【译文】** 该用户界面由四个主要部分组成：搜索区、列表页、详情视图和操作区。在搜索区内，用户可以建立过滤条件，以辅助发现可用的智能场景。这些搜索条件的示例包括智能场景的名称、其所属的包（package）或其当前状态。符合既定搜索条件的智能场景显示在驾驶舱的左侧。随后，用户可以选择与其相关的智能场景，关于该场景的详细信息将显示在驾驶舱的右侧。该部分的表格显示了已激活模型和验证模型对每个请求的响应。如果可用，还可以显示来自模型用户的直接反馈。用户能够导航至特定请求，并比较已激活模型和验证模型的响应。这种比较通过预计算的关键绩效指标（KPI）和响应的随时间变化显示功能来实现。用户还可以选择定义自己的KPI，或对请求和响应数据应用额外的数据科学方法。基于对这些数据的分析，用户可以发起各种操作。这些操作可能包括保留当前激活的模型，如果验证模型被证明更准确则切换到验证模型，或者推迟决定直到收集到更多数据。

---

Validation of artificial intelligence models is the process of testing the accuracy and reliability of a model’s predictions. This is done by comparing the model’s output with known data and making sure that the model is able to generalize well to unseen data. Validation helps to ensure that the model is not overfitting or underfitting the data and that it is able to accurately predict outcomes. Statistical methods exist to validate artificial intelligence models regarding the accuracy of predictions. However, for business applications, this mathematical approach alone is not enough. Additional validation from functional and business process points of view is necessary. Therefore, in this section, we deducted the business requirements and proposed the necessary technical solution for validation of artificial intelligence models.

**【译文】** 人工智能模型的验证是测试模型预测准确性和可靠性的过程。这是通过将模型的输出与已知数据进行比较，并确保模型能够很好地泛化到未见数据来完成的。验证有助于确保模型没有对数据出现过拟合或欠拟合的情况，并能够准确地预测结果。目前已存在统计学方法来验证人工智能模型预测的准确性。然而，对于企业应用而言，仅靠这种数学方法是不够的。还需要从功能和业务流程的角度进行额外的验证。因此，在本节中，我们推导了业务需求，并提出了用于人工智能模型验证的必要技术解决方案。

---

Validating models by providing them to specific consumer groups is not sufficient in the context of ERP as based on these, models’ actions are processed, which cannot be undone due to legal compliance. To overcome this restriction, we proposed a concept making use of background inference for collecting validation data, which are analyzed with a suggested model validation cockpit.

**【译文】** 在企业资源规划（ERP）的背景下，仅通过将模型提供给特定消费群体来进行验证是不够的，因为基于这些模型所处理的操作，出于法律合规性原因往往是不可撤销的。为了克服这一限制，我们提出了一个概念，即利用后台推理（background inference）来收集验证数据，并使用建议的模型验证驾驶舱（cockpit）对这些数据进行分析。

---

In this chapter, we specify the business requirements and propose the solution concept for user interface design. Incorporating artificial intelligence capabilities into user interfaces needs a particular design and provisioning of new user interface technologies. Only with proper integration into the user interfaces is the instant value of artificial intelligence exploited effectively. Therefore, we propose user interface patterns like matching, recommendation, or ranking to facilitate user interface design for intelligent applications. Thus, partially completely new user interface components are necessary to serve artificial intelligence scenarios.

**【译文】** 在本章中，我们将明确业务需求并提出用户界面设计的解决方案概念。将人工智能能力融入用户界面需要特定的设计以及新用户界面技术的支持。只有通过与用户界面的恰当集成，才能有效挖掘人工智能的即时价值。因此，我们提出诸如匹配（matching）、推荐（recommendation）或排名（ranking）等用户界面模式，以促进智能应用程序的界面设计。因此，为了服务于人工智能场景，部分全新的用户界面组件是必要的。

---

Many individuals perceive user experience as an emotional concept rather than a logical one, which can make it challenging to justify the business benefits of investing in good user experience. However, the reality is that good user experience carries a tangible financial value, in addition to the obvious human value of enhancing people’s happiness. For instance, a well-designed user experience can boost productivity, as it enables individuals to accomplish more with an ERP system. This is not only because they become more efficient but also because they become more effective, as the intelligent ERP system directs them toward the tasks that require their attention the most. Another crucial factor is the quality of data: errors in data entry can lead to significant costs later in the process. Therefore, ensuring high-quality data from the outset through a good user experience can prevent the need for later data corrections. Software that is easy to use requires minimal training, leading to substantial savings in training and subsequent support desk costs. If end users are involved in the implementation process and the user experience is tailored to meet their needs from the beginning, the number of change requests for new or different features can be reduced. Changes to a deployed user interface are more costly than changes made in advance. Additionally, the number of user errors will decrease,

**【译文】** 许多人认为用户体验是一个感性概念而非逻辑概念，这使得证明在良好用户体验上投资的商业效益变得具有挑战性。然而，现实情况是，良好的用户体验除了能提升人们幸福感这一显而易见的人文价值外，还具有有形的财务价值。例如，精心设计的用户体验可以提高生产力，因为它能让个人利用ERP系统完成更多工作。这不仅是因为他们变得更有效率（efficient），还因为他们变得更有成效（effective），因为智能ERP系统会引导他们关注最需要处理的任务。另一个关键因素是数据质量：数据录入中的错误可能导致后续流程产生巨大成本。因此，通过良好的用户体验从源头确保高质量数据，可以避免后续的数据修正需求。易于使用的软件需要的培训极少，从而在培训和随后的支持台成本方面节省大量资金。如果最终用户参与实施过程，并且用户体验从一开始就根据他们的需求量身定制，那么针对新功能或不同功能的变更请求数量就可以减少。对已部署的用户界面进行更改比预先进行的更改成本更高。此外，用户错误的数量也会减少，

---

reducing costs associated with poor data quality and support desk services. Beyond these measurable advantages, a high-quality user experience offers clear human value benefits. These are especially significant in the current era, where businesses compete to attract top talent who prefer to work with contemporary tools rather than outdated ones. A good user experience leads to increased user satisfaction; promotes the inclusion of all employees, including those with disabilities, by supporting accessibility; and encourages people within the company to actually use the software, instead of, for example, storing data separately on their desktops for as long as possible. If the applications are customer-facing, a good user experience can help foster and enhance customer loyalty. Lastly, from the perspective of an IT department, supplying business units with software that offers a superior user experience can strengthen the relationship with these units, as the IT department is providing software that their teams enjoy using.

**【译文】** 从而降低与低劣数据质量和支持台服务相关的成本。除了这些可衡量的优势外，高质量的用户体验还提供了明确的人文价值效益。在当今时代，企业竞相争夺顶尖人才，而这些人更喜欢使用现代工具而非过时工具，这一点尤为重要。良好的用户体验能提高用户满意度；通过支持无障碍访问（accessibility）促进包括残障人士在内的所有员工的包容性；并鼓励公司内部人员真正使用该软件，而不是（例如）尽可能久地将数据单独存储在自己的桌面上。如果应用程序是面向客户的，良好的用户体验有助于培养和增强客户忠诚度。最后，从IT部门的角度来看，为业务部门提供具有卓越用户体验的软件可以加强与这些部门的关系，因为IT部门提供的是团队喜欢使用的软件。

---

An intelligently ERP system can enhance the cognitive abilities of a human user. Similar to previous generations of tools, our objective should be to equip users and enhance the results of human labor. To realize this objective, we suggest the following principles for the creation of intelligent systems:

**【译文】** 智能ERP系统可以增强人类用户的认知能力。与前几代工具类似，我们的目标应该是装备用户并提升人类劳动的成果。为了实现这一目标，我们建议遵循以下原则来创建智能系统：

---

• Humans should be in control • In a corporate setting, actions initiated in an ERP system can have a concrete effect in the real world, influencing the company’s objectives and earnings. Since the human user still holds the responsibility and accountability for these actions, they must always have control over the outcome.

**【译文】** • 人类应处于掌控地位：在企业环境中，ERP系统中启动的操作会对现实世界产生具体影响，影响公司的目标和收益。由于人类用户仍对这些操作承担责任和问责，他们必须始终掌控结果。

---

• Enhance human abilities • An intelligent system should strive to improve the skills of human experts to earn their trust and encourage successful implementation, rather than attempting to replace them. Measures such as offering improved transparency and effective tools for decision-making processes, incorporating user feedback, and presenting information in a more comprehensible manner can all enhance the individual’s power and influence. On the other hand, concealing information, oversimplifying the truth, or limiting the options without adequate transparency can make the user a slave to the ERP system. The user should have the ability to comprehend and manage the intelligent system.

**【译文】** • 增强人类能力：智能系统应致力于提高人类专家的技能以赢得他们的信任并鼓励成功实施，而不是试图取代他们。诸如提供更高的透明度和有效的决策工具、整合用户反馈以及以更易于理解的方式呈现信息等措施，都可以增强个人的力量和影响力。另一方面，隐瞒信息、过度简化事实或在缺乏足够透明度的情况下限制选项，可能会使用户沦为ERP系统的奴隶。用户应具备理解和管理智能系统的能力。

---

• Design aligned with ethics • Machines perform the tasks they are programmed to do; there is no ethical judgment in an algorithm. The designers and creators of sophisticated artificial intelligence systems are involved in the ethical consequences of their use, misuse, and actions, and they have the responsibility and opportunity to influence these consequences. It is necessary to establish definite and enforceable ethical guidelines that intelligent systems must adhere to.

**【译文】** • 设计符合伦理：机器执行它们被编程的任务；算法中没有伦理判断。复杂人工智能系统的设计者和创造者与其使用、滥用和行动的伦理后果相关联，他们有责任也有机会影响这些后果。必须建立智能系统必须遵守的明确且可执行的伦理准则。

---

• Effective automation • Intelligent ERP systems should minimize the effort required by a user to accomplish a task. This involves determining the appropriate level of automation for each use case. When complete automation is not possible, we should strive for increased efficiency. Intelligent systems can assist users in achieving the same outcomes with

**【译文】** • 有效的自动化：智能ERP系统应最大限度地减少用户完成任务所需的努力。这涉及确定每个用例的适当自动化水平。当无法实现完全自动化时，我们应致力于提高效率。智能系统可以通过将自动化与对现有信息的改进利用、透明度和学习效应相结合，帮助用户以更少的步骤实现相同的结果。

---

