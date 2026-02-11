# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第93部分

**原始页码**: 277 - 279
**段落数量**: 16
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 276-276 (1342 字符)
- **后文上下文页码**: 280-280 (596 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Semantic colors' 译为 '语义颜色'，指UI设计中用颜色（如红绿灯色）表达状态意义的惯例。
2. 18.2.3中的 'Ranking' 译为 '排名'，部分语境下也可理解为 '评级' 或 '评分'，根据后文的 A/B/C 等级示例，此处统一采用 '排名' 以涵盖数值排名和等级分类。
3. 'Recommendation block' 译为 '推荐区块'，意指UI中的一个功能模块。
4. 关于IoT的描述段落（interconnected network...），原文是对物联网的定义式描述，译文保持了描述性翻译以符合原文风格。

---

Fig. 18.4 Recommendation block

**【译文】** 图 18.4 推荐区块

---

Recommendation block header
The block toolbar contains a meaningful and short block title (1), which describes the set of proposed solutions (2). It can also offer additional functionality (3) that applies to the whole recommendation block, such as an additional explanation of the model behind the recommendations or an option to provide explicit user feedback to reinforce the underlying model.

**【译文】** 推荐区块标题栏
区块工具栏包含一个简短且有意义的标题（1），用于描述拟议的解决方案集（2）。它还可以提供适用于整个推荐区块的附加功能（3），例如对推荐背后的模型进行补充解释，或者提供明确的用户反馈选项以强化底层模型。

---

Recommendation block items
Recommendation items (4) are the main content of the recommendation block. Depending on the use case and space constraints, they can be organized horizontally, vertically, or as a grid.

**【译文】** 推荐区块条目
推荐项（4）是推荐区块的主要内容。根据具体用例和空间限制，它们可以按水平、垂直或网格形式排列。

---

Ranked recommendations
The initial suggestion within the recommendation block can be highlighted to indicate the most favored proposition. It is advisable to underscore just a single entry, the most favored one, in the enumeration and position it at the top. If the situation demands, we can apply the use of semantic colors to enhance the emphasis.

**【译文】** 排序推荐
推荐区块内的首个建议可以高亮显示，以表明它是最受推崇的方案。建议仅强调单个条目（即最受推崇的那个），并在列表中将其置于顶部。如果情况需要，我们可以应用语义颜色来增强强调效果。

---

18.2.3 Ranking

**【译文】** 18.2.3 排名

---

(1) Ranking value
The ranking is typically determined by a common value, which is usually a numerical figure that establishes the position of an object. This value could be an indirect one, such as cost or delivery duration, or it could be a score. Depending on the specific application, the score could be displayed as a percentage or without any measurement unit. Alternatively, a compact visual representation like a radial microchart could be used. While it’s unusual, rankings can also be based on non-numerical values, such as the letter-based grading systems used in academia (A+, A, A−; B+, B, B−; C+, C, C−; D+, D, D−). Interacting with the ranking value, either by clicking or tapping, will open a dialog box that provides detailed information about the ranking of the item in question. If there are items in a list that, for whatever reason, lack a ranking value, they should be placed at the end of the list. An instance of this could be a newly added supplier that hasn’t accumulated enough data to be ranked by the system.

**【译文】** （1）排名值
排名通常由一个通用值决定，该值通常是确定对象位置的数值。这个值可以是间接指标，如成本或交付时长，也可以是一个评分。根据具体应用，评分可以显示为百分比或不带任何计量单位。或者，也可以使用紧凑的视觉表示形式，如径向微型图表。虽然不常见，但排名也可以基于非数值，例如学术界使用的字母分级系统（A+、A、A-；B+、B、B-；C+、C、C-；D+、D、D-）。与排名值交互（点击或轻触）将打开一个对话框，提供有关该条目排名的详细信息。如果列表中的某些条目因某种原因缺乏排名值，应将其置于列表末尾。例如，一个新添加的供应商可能尚未积累足够的数据供系统进行排名。

---

Fig. 18.5 Ranking elements

**【译文】** 图 18.5 排名元素

---

(2) Ranking description
The description associated with a ranking gives further explanation to the ranking’s value. Using words such as best or alternative can provide more precise direction without adding unnecessary complexity. It’s crucial to recognize that these ranking descriptions are greatly influenced by their context. The choice of language and its correlation to the ranking score is determined by the content it’s associated with, the specific application, and the overall process.

**【译文】** （2）排名描述
与排名关联的描述对排名值作进一步解释。使用诸如“最佳”或“替代”之类的词语可以提供更精确的指导，而不会增加不必要的复杂性。至关重要的是要认识到，这些排名描述在很大程度上受其上下文影响。语言的选择及其与排名分数的关联取决于其关联的内容、具体应用以及整体流程。

---

(3) Change indicator
The modification marker simplifies the process of monitoring the ranking value for rapidly fluctuating data sets, like live feeds used in scenarios involving the interconnected network of physical devices, vehicles, and other items embedded with software, sensors, and network connectivity that enables these objects to collect and exchange data.

**【译文】** （3）变化指示器
修改标记简化了对快速波动数据集（如实时源）排名值的监控过程，这类数据常用于涉及物理设备、车辆及其他嵌入了软件、传感器和网络连接功能的物品所构成的互联网络场景，这些功能使得这些物体能够收集并交换数据。

---

In order to enhance clarity and aid the user in making informed decisions, it is advisable to furnish more detailed information about the ranking system whenever it is feasible.

**【译文】** 为了提高清晰度并帮助用户做出明智的决定，建议在可行的情况下提供有关排名系统的更详细信息。

---

The value used for ranking is the smallest element necessary to display a ranking for a list or table. The description of the ranking and the change indicator enhance the fundamental value of the ranking, but they may not always be necessary. Besides these three primary elements of the ranking component, there are two more factors to think about:

**【译文】** 用于排名的值是显示列表或表格排名所需的最小元素。排名描述和变化指示器增强了排名的基础价值，但它们并非总是必需的。除了排名组件的这三个主要元素外，还有两个因素需要考虑：

---

Semantic colors
These can be used to emphasize the message of the ranking. Use semantic colors based on values when the aim is to highlight data points that are positive, neutral, or negative. Depending on the set threshold values, the color of each data point could be red, green, or orange.

**【译文】** 语义颜色
语义颜色可用于强调排名的信息。当目的是突出积极、中性或消极的数据点时，应基于数值使用语义颜色。根据设定的阈值，每个数据点的颜色可以是红色、绿色或橙色。

---

Presentation variations
These variations allow the ranking concept to support different representations of the same data point. The appropriate representation depends on the role and use case, as well as the relative significance of ranking in the application. For instance, if the ranking is part of the dataset but isn’t pertinent for the role or task, avoid using a semantic color and present the ranking like all other values in the table.

**【译文】** 展示形式的变体
这些变体允许排名概念支持同一数据点的不同表现形式。合适的表现形式取决于角色和用例，以及排名在应用程序中的相对重要性。例如，如果排名是数据集的一部分，但与当前角色或任务无关，则应避免使用语义颜色，并将排名像表格中的其他值一样呈现。

---

Fig. 18.6 Ranking details

**【译文】** 图 18.6 排名详情

---

18.3 Conclusion

**【译文】** 18.3 结语

---

User experience has become significantly more important in recent years because companies no longer see it as a pure design function but also as an economic benefit that promises long-term competitive advantages and high employee and customer satisfaction. For this reason, the continuous development and improvement of the user experience are indispensable. Incorporating artificial intelligence capabilities into user interfaces needs a particular design and provisioning of new user interface technologies. Only with proper integration into the user interfaces is the instant value of artificial intelligence exploited effectively.

**【译文】** 近年来，用户体验的重要性显著提升，因为企业不再将其视为单纯的设计职能，而是视为一种能带来长期竞争优势以及高员工和客户满意度的经济效益。因此，持续开发和改进用户体验是必不可少的。将人工智能能力整合到用户界面中，需要特定的设计和新用户界面技术的供给。只有通过适当地集成到用户界面中，人工智能的即时价值才能得到有效利用。

---

