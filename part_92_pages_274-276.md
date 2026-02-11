# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第92部分

**原始页码**: 274 - 276
**段落数量**: 15
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 273-273 (1977 字符)
- **后文上下文页码**: 277-277 (1420 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. **Drill down** 翻译为“向下钻取”，是数据分析和ERP系统中常用的术语，表示从汇总数据深入查看细节。
2. **Floorplans** 翻译为“页面布局”，在SAP Fiori设计语言中常指特定的页面结构模式。
3. **Finalizing action** 结合前文翻译为“最终操作”，指完成流程步骤的动作。

---

We can display the collection of matching groups to users in various formats – for instance, as a list, a grid, or even a graph. Users can then drill down into a specific group and analyze its content and match quality in detail. The way a matching group is displayed depends on the use case and can range from a simple list to a complex chart like a network graph.

**【译文】** 我们可以通过多种格式向用户展示匹配组的集合——例如，作为列表、网格，甚至图表。然后，用户可以向下钻取特定的组，详细分析其内容和匹配质量。匹配组的显示方式取决于具体用例，形式可以从简单的列表到复杂的图表（如网络图）。

---

The level of interaction with the matched objects and groups varies depending on the matching level and the match quality. For instance, if the proposed match is not very precise, then editing the matching group becomes a crucial part of the interaction. Higher levels of automation already provide sufficiently good match proposals and only differ in strategy. Here, the following main or finalizing actions are possible:

**【译文】** 与匹配对象和组的交互程度因匹配级别和匹配质量而异。例如，如果建议的匹配不够精确，那么编辑匹配组就成为了交互的关键部分。更高水平的自动化已经能够提供足够好的匹配建议，仅在策略上有所不同。在这里，可能进行以下主要操作或最终操作：

---

• Approve: The proposal is accepted as it is.
• Reject: The proposal is either fully or partially rejected. Partial rejection involves manually editing the matching group and then accepting it. Rejection can trigger a subsequent feedback mechanism (either implicit or explicit).

**【译文】** • **批准**：原样接受建议。
• **拒绝**：完全或部分拒绝建议。部分拒绝涉及手动编辑匹配组，然后接受它。拒绝操作可以触发后续的反馈机制（隐式或显式）。

---

• Merge: This involves combining two or more groups into a superior one.
• Split: This involves forming two or more groups from a single one. This can be done by selecting individual items, which are then used to form new groups.

**【译文】** • **合并**：这涉及将两个或多个组合并为一个上级组。
• **拆分**：这涉及从单个组形成两个或多个组。这可以通过选择单个项目来完成，然后使用这些项目形成新的组。

---

The concept itself does not impose any restrictions on responsiveness and adaptiveness. It typically utilizes standard user interface controls and floorplans and adopts their responsiveness characteristics and guidelines.

**【译文】** 该概念本身不对响应性和自适应性施加任何限制。它通常利用标准的用户界面控件和页面布局（floorplans），并采用它们的响应式特性和设计准则。

---

18.2.2 Recommendations
Intelligent ERP systems can assist users by recommending suitable content or suggesting an action or input that the user might favor. In this context, we’re discussing recommendation and its impact on the user interface.

**【译文】** 18.2.2 推荐
智能企业资源规划（ERP）系统可以通过推荐合适的内容，或建议用户可能偏好的操作或输入来辅助用户。在此背景下，我们将讨论推荐及其对用户界面的影响。

---

As previously noted, there are various types of recommendation models, such as assistance with input or suggestions for solutions. Input assistance offers recommendations for user input to fill out an entire form or just a single element of it. In both scenarios, we need to design the following micro-interactions:

**【译文】** 如前所述，存在多种类型的推荐模型，例如输入辅助或解决方案建议。输入辅助为用户输入提供推荐，以填充整个表单或仅填充其中的单个元素。在这两种场景中，我们需要设计以下微交互：

---

• Detect: From a user’s perspective, we need to identify the values that the system has proposed.
• Explain: From a user’s perspective, we want to comprehend the reasoning behind the system’s recommendation.

**【译文】** • **检测**：从用户的角度来看，我们需要识别系统提议的值。
• **解释**：从用户的角度来看，我们希望理解系统推荐背后的原因。

---

• Compare: From a user’s perspective, we need the ability to compare the existing human input against the system’s recommendation.
• Act: From a user’s perspective, we wish to either accept or reject the system’s recommendations.

**【译文】** • **比较**：从用户的角度来看，我们需要能够将现有的人工输入与系统推荐进行比较。
• **行动**：从用户的角度来看，我们希望接受或拒绝系统的推荐。

---

(1) Without human input and without system recommendation
(2) With human input but without system recommendation
(3) Without human input but with system recommendation
(4) With human input and with system recommendation
Fig. 18.2 Input assistance

**【译文】** (1) 无人工输入且无系统推荐
(2) 有人工输入但无系统推荐
(3) 无人工输入但有系统推荐
(4) 有人工输入且有系统推荐
图 18.2 输入辅助

---

Users have the option to either implicitly agree with the system’s recommendation by submitting the entire form or they can explicitly choose an alternative if there’s a disagreement. If users want to outright reject a system’s recommendation, they can do so by beginning to adjust it in the input field.

**【译文】** 用户可以选择通过提交整个表单来隐式同意系统的推荐，或者在存在分歧时显式选择替代方案。如果用户想要彻底拒绝系统的推荐，可以通过开始在输入字段中调整它来实现。

---

• Title and description: The recommendation should be given a concise yet meaningful title that encapsulates the recommended action. Additional details can be provided in a supplementary description. While longer texts may be cut off after the second line, it is advisable to avoid such truncation.

**【译文】** • **标题和描述**：推荐应给出一个简洁而有意义的标题，概括推荐的操作。补充描述中可以提供更多细节。虽然较长的文本可能会在第二行后被截断，但建议尽量避免这种截断。

---

• Action: In order to apply a recommendation, the user must perform a corresponding action. The action can be initiated by clicking on the entire list item or a specific button, depending on the design of the recommendation item.

**【译文】** • **操作**：为了应用推荐，用户必须执行相应的操作。根据推荐项的设计，可以通过点击整个列表项或特定按钮来启动该操作。

---

• Selection: In certain scenarios, users may need to preview the results before making a selection. In such instances, the triggers for the preview and the final action should be distinct.

**【译文】** • **选择**：在某些场景中，用户可能需要在做出选择之前预览结果。在这种情况下，预览和最终操作的触发方式应当区分开来。

---

• Preferred proposal: Based on the specific use case, a recommendation item can be highlighted as a preferred proposal. For more information, refer to the section on ranked recommendations that follows.

**【译文】** • **首选建议**：根据具体用例，可以将某个推荐项高亮显示为首选建议。有关更多信息，请参考随后的排名推荐部分。

---

