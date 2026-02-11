# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第64部分

**原始页码**: 190 - 192
**段落数量**: 4
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 189-189 (1699 字符)
- **后文上下文页码**: 193-193 (512 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Side-by-Side Artificial Intelligence：译为'并行人工智能'。在ERP（特别是SAP）语境中，Side-by-Side通常指AI应用部署在与核心ERP系统并行连接的技术平台（如BTP）上，而非直接嵌入在核心系统内部。 2. 首句补充：原文段落首句'is universal...'不完整，根据前文语境推断主语为前述的映射机制或解决方案，故译文中补充了'（这种机制）'以保持语义通顺。

---

10 Data Protection and Data Privacy

**【译文】** 第10章 数据保护与数据隐私

---

10.2 Solution Proposal

**【译文】** 10.2 解决方案建议

---

is universal and can be used in various use cases. However, this dynamic functionality also necessitates the use of generic database tables to store consent information. The organization of these database tables is depicted as boxes in Fig. 10.5. Using these table definitions, the SQL statement for merging application data with consent details can be dynamically established, as shown in the code in Fig. 10.5. As a result, the central data model view for model training only takes into account records with consent. It is important to note that there is usually no framework in place for integrating application and consent data. Consequently, the SQL statements must be supplied by the developer responsible for the artificial intelligence scenario.

**【译文】** （这种机制）是通用的，可适用于各种用例。然而，这种动态功能也需要使用通用的数据库表来存储同意信息。这些数据库表的组织结构如图10.5中的方框所示。利用这些表定义，可以动态构建用于合并应用数据与同意详情的SQL语句，如图10.5中的代码所示。因此，用于模型训练的中央数据模型视图将仅包含已获得同意的记录。值得注意的是，通常缺乏现成的框架来整合应用数据和同意数据。因此，必须由负责人工智能场景的开发人员提供这些SQL语句。

---

10.2.3 Side-by-Side Artificial intelligence

**【译文】** 10.2.3 并行人工智能（Side-by-Side Artificial Intelligence）

---

