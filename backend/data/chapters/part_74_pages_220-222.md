# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第74部分

**原始页码**: 220 - 222
**段落数量**: 7
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 219-219 (2093 字符)
- **后文上下文页码**: 223-223 (1574 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Predictive power' 译为 '预测效力'，指模型解释变量变异的能力。
2. 'Prediction confidence' 译为 '预测置信度'，指模型在类似新数据上保持性能的稳健性。
3. 'Drift and Skew' 译为 '漂移和偏态'，统计学通用术语。
4. Page 222 首句原文截断，根据上下文（Section 13.2.3 Feedback Loops）及后文对比 'Explicit feedback'，补全主语为 '[隐式反馈]' 以保持语义完整。
5. 最后一段原文在 'method and' 处截断，已结合后文上下文 'format of feedback collection...' 补全翻译。

---

deep learning model. So, how do we determine the precision of an artificial intelligence model? The fundamental concept is to train an artificial intelligence model on a specific dataset and then apply that underlying function to data points for which the output value is already known. This leads to two output values: the actual one and the prediction from the artificial intelligence model. It’s then relatively straightforward to calculate how often the predictions are incorrect by comparing the predictions with the actual values. This forms the basis of various static methods to calculate accuracy key performance indicators (KPIs). For instance, for classification, regression, or clustering models, the predictive power and prediction confidence can be evaluated. The predictive power assesses the artificial intelligence model’s ability to predict the target variable’s values using input variables present in the input dataset. The predictive power indicator ranges from 0% to 100%. Ideally, this value should be as close to 100% as possible, without being exactly 100%. A predictive power of 1 represents a theoretically perfect model, where the input variables can account for 100% of the information in the target variable. However, in practice, this usually suggests that an input variable that is 100% correlated with the target variable was not removed from the dataset analyzed. A predictive power of 0 represents a completely random model with no predictive strength. To enhance a model’s predictive power, consider adding new variables to the training dataset and combining input variables. For instance, a model with a predictive power of 79% can account for 79% of the variation in the target variable using the input variables in the analyzed dataset. There is no precise threshold to distinguish a good model from a poor predictive model in terms of predictive power, as this depends on the business case. The prediction confidence reflects the model’s robustness to achieve the same performance when applied to a new dataset that shares the same characteristics as the training dataset. The prediction confidence indicator also ranges from 0% to 100%. A model with a prediction confidence of 95% or higher is considered robust and has a strong generalization capacity. A prediction confidence below 95% should be treated with caution, as there is a risk of producing unreliable results if the model is applied to a new dataset. To enhance the prediction confidence, typically, more observation rows are added to the training dataset. The accuracy KPIs need to be constantly monitored. If, for instance, the predictive power and/or the prediction confidence of the model on the control dataset are significantly low, it implies that the relationship between the input variables and the target variable has changed. When this occurs, it is advisable to retrain the artificial intelligence model using new data.

**【译文】** 不管是决策树还是深度学习模型，了解其性能都至关重要。那么，我们该如何确定人工智能模型的精确度呢？其基本概念是在特定的数据集上训练人工智能模型，然后将该底层函数应用于输出值已知的数据点。这会产生两个输出值：实际值和人工智能模型的预测值。通过比较预测值与实际值，就可以相对简单地计算出预测错误的频率。这构成了计算各种静态准确性关键绩效指标（KPI）的基础。例如，对于分类、回归或聚类模型，可以评估其“预测效力”和“预测置信度”。

“预测效力”评估的是人工智能模型利用输入数据集中的输入变量来预测目标变量值的能力。预测效力指标的范围从 0% 到 100%。理想情况下，该数值应尽可能接近 100%，但不能刚好是 100%。预测效力为 1 代表理论上的完美模型，即输入变量可以解释目标变量 100% 的信息。然而，在实践中，这通常意味着分析的数据集中没有移除与目标变量具有 100% 相关性的输入变量（即数据泄露）。预测效力为 0 则代表模型完全随机，没有任何预测能力。要提高模型的预测效力，可以考虑在训练数据集中添加新变量或组合输入变量。例如，一个预测效力为 79% 的模型，意味着利用分析数据集中的输入变量，可以解释目标变量 79% 的变化。关于什么是好的预测模型，并没有一个精确的预测效力阈值，因为这取决于具体的业务案例。

“预测置信度”反映了模型的稳健性，即当应用于与训练数据集具有相同特征的新数据集时，模型达到相同性能的能力。预测置信度指标的范围也是从 0% 到 100%。预测置信度在 95% 或更高的模型被认为是稳健的，并且具有很强的泛化能力。预测置信度低于 95% 的模型应谨慎对待，因为如果将其应用于新数据集，可能会产生不可靠的结果。通常，可以通过在训练数据集中增加更多的观测行（数据样本）来提高预测置信度。我们需要持续监控准确性 KPI。例如，如果模型在对照数据集上的预测效力和/或预测置信度显著偏低，则意味着输入变量与目标变量之间的关系发生了变化。当这种情况发生时，建议使用新数据重新训练人工智能模型。

---

The strategy of accuracy key performance indicators (KPIs) that was previously discussed is designed to keep track of the relationship between the input variables and the predicted target variable. However, the detection of drift and skew is more concerned with managing the distribution of the input and prediction variables. The detection of drift and skew is a method that identifies shifts in a dataset’s data distribution over time. This method is used when a dataset appears to have deviated from its initial distribution or when the data seems to have become disproportionately skewed in a particular direction. This method can be used to identify anomalies in the data, such as outliers or changes in the data distribution. It can also be used to detect changes in the underlying data generating process, such as changes in the underlying parameters or assumptions.

**【译文】** 之前讨论的准确性关键绩效指标（KPI）策略，旨在跟踪输入变量与预测的目标变量之间的关系。然而，“漂移和偏态检测”更侧重于管理输入变量和预测变量的分布。漂移和偏态检测是一种识别数据集的数据分布随时间发生变化的方法。当数据集似乎偏离了其初始分布，或者数据似乎在特定方向上出现不成比例的倾斜时，就会使用这种方法。该方法可用于识别数据中的异常情况，例如离群值或数据分布的变化。它还可用于检测底层数据生成过程的变化，例如底层参数或假设条件的改变。

---

In the case of live data, the predictions made by the artificial intelligence model are monitored. If the distribution of these predictions begins to change, it could indicate that the model is degrading, or at the very least, it could be worth investigating. For example, if the model is being used to classify images as either urban or nature, and for the first month, it was predicting urban for 50% of the images and nature for the rest and then, in the following month, the distribution suddenly shifted to 90% urban, this could be a sign of model degradation. Similarly, the distribution of the input can also be monitored. For instance, if we have a model that classifies texts and we suddenly start receiving text documents with new words or the frequency of certain words begins to increase, then it suggests that the data distribution has shifted and the model has likely deteriorated.

**【译文】** 对于实时数据，我们会监控人工智能模型做出的预测。如果这些预测值的分布开始发生变化，可能表明模型正在退化，或者至少值得进一步调查。例如，如果模型用于将图像分类为“城市”或“自然”风光，在第一个月，它预测 50% 的图像为城市，其余为自然；但在接下来的一个月，分布突然转变为 90% 都是城市，这可能就是模型退化的迹象。同样，我们也可以监控输入的分布。例如，如果有一个文本分类模型，我们突然开始收到包含新词汇的文本文档，或者某些词汇的出现频率开始增加，这表明数据分布发生了偏移，模型很可能已经性能下降。

---

feedback because it reflects the actions users actually take. This type of feedback can be collected unobtrusively, without interrupting the user’s experience. However, this also implies that the user is not aware of the process. One of the drawbacks of implicit feedback is its weak correlation with the user’s long-term behavior. We suggest using methods of implicit feedback under the following conditions:
•	 If the collection of appropriate feedback is essential for regularly retraining the model and explicit feedback methods are not sufficient
•	 If users are not likely to accurately record their feedback using explicit feedback methods
•	 If the user’s primary task involves making the decisions that are being monitored

**【译文】** 【隐式反馈】之所以有价值，是因为它反映了用户实际采取的行动。这种类型的反馈可以在不打断用户体验的情况下悄然收集。然而，这也意味着用户对该过程并不知情。隐式反馈的一个缺点是它与用户长期行为的相关性较弱。我们建议在以下情况下使用隐式反馈方法：
• 收集适当的反馈对于定期重新训练模型至关重要，且显式反馈方法不足以满足需求时；
• 用户不太可能使用显式反馈方法准确记录其反馈时；
• 用户的首要任务涉及做出正在被监控的决策时。

---

Explicit feedback comes from direct engagement with the user, such as through ranking systems, voting, flagging, polling, or commenting. However, this type of feedback can be more prone to bias, particularly if it’s not limited to users with expertise. The nature of explicit feedback is subjective, as it depends on the user’s personal views, which may not always align with their actual behavior. While explicit feedback is clear to the user, it can also be disruptive and negatively affect the user experience, posing a significant design challenge. Despite this, it is a crucial source of information for refining long-term strategies. In certain situations, explicit feedback can also lessen the work needed to retrain models. We suggest using methods of explicit feedback when:
•	 The user has the option to provide feedback but it’s not a requirement
•	 The process of giving feedback doesn’t require a significant amount of mental effort
•	 The act of providing feedback doesn’t distract users from their main tasks

**【译文】** 显式反馈来自于与用户的直接互动，例如通过评分系统、投票、标记、民意调查或评论。然而，这种类型的反馈更容易产生偏差，特别是当反馈者不限于具备专业知识的用户时。显式反馈本质上是主观的，因为它取决于用户的个人观点，而这些观点并不总是与其后的实际行为一致。虽然显式反馈对用户来说是透明的，但它也具有干扰性，可能会对用户体验产生负面影响，这是一个重大的设计挑战。尽管如此，它仍是优化长期策略的关键信息来源。在某些情况下，显式反馈还可以减少重新训练模型所需的工作量。我们建议在以下情况下使用显式反馈方法：
• 用户可以选择提供反馈，但这并非强制性要求；
• 提供反馈的过程不需要消耗大量的脑力；
• 提供反馈的行为不会分散用户在主要任务上的注意力。

---

Delayed feedback is a method of collecting explicit feedback from users without interrupting their workflow. If the system requires feedback from the user, for instance, to understand why an approved amount surpasses the system’s recommendation, it doesn’t disrupt the user with a feedback form. Instead, the user is simply informed that feedback is needed and can decide whether to respond immediately or continue working and provide feedback later. The user can access a list of all pending feedback questions that need responses and address them at their convenience. The primary design challenge with the delayed feedback system is recreating the context of the user’s decision when the user provides feedback to the system at a later time. To tackle common feedback problems, feedback data might need extra processing before it can be used for model degradation. For instance, implicit feedback could be influenced by event-related bias, or explicit feedback might only represent the views of a specific user group. In these situations, the feedback might first need to be evaluated by a user in a different role, such as a data scientist, using a separate user interface.

**【译文】** 延迟反馈是一种在不打断用户工作流程的情况下收集显式反馈的方法。如果系统需要用户反馈（例如，为了了解为何批准金额超过了系统的建议金额），它不会弹出反馈表单来干扰用户。相反，系统只是通知用户需要反馈，用户可以决定是立即回应，还是继续工作稍后再提供反馈。用户可以访问一个包含所有待处理反馈问题的列表，并在方便时进行处理。延迟反馈系统的主要设计挑战在于，当用户稍后向系统提供反馈时，如何重现用户当时做决策时的情境上下文。为了解决常见的反馈问题，反馈数据在用于评估模型退化之前可能需要进行额外处理。例如，隐式反馈可能会受到事件相关偏差的影响，而显式反馈可能仅代表特定用户群体的观点。在这种情况下，反馈可能首先需要由不同角色的用户（如数据科学家）使用单独的用户界面进行评估。

---

Choosing the right input control requires considering various ways of asking for feedback and how effectively we can use the insights gained. The method and

**【译文】** 选择正确的输入控件，需要考虑征求反馈的各种方式，以及我们如何有效地利用所获得的见解。反馈收集的方法和格式决定了反馈的质量。

---

