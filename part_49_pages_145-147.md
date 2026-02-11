# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第49部分

**原始页码**: 145 - 147
**段落数量**: 7
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 144-144 (309 字符)
- **后文上下文页码**: 148-148 (1355 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Push down'（下推）：ERP和数据库领域的关键概念，指将计算逻辑从应用层移动到数据库层执行（Code-to-Data），以利用数据库的算力并减少数据传输。
2. 第一个段落原文开头不完整，译文根据前文列式存储（Column Store）的上下文补充了主语含义，指代数据存储方式。
3. 第五个段落原文开头不完整，译文补充了'在传统架构中'这一隐含的时间背景，以便与后文提到的'现代ERP产品'形成对比。

---

consecutive blocks, there is no need for complex algorithms to locate, identify, and compress the data, resulting in significant data size reduction. Moreover, column storage enables parallel execution across multiple processor cores, as data in a column store is inherently vertically partitioned, allowing operations on different col­umns to be processed in parallel. In-memory database systems offer high performance for both read and write operations, supporting transactional and ana­lytical use cases. These capabilities are further enhanced with features such as text analysis and search, geospatial processing, time series analysis, streaming, and spa­tial processing. In-memory database management systems also provide artificial intelligence libraries and runtime, which are utilized in the context of embedded artificial intelligence architecture as shown in Fig. 7.3.

**【译文】** （由于数据存储在）连续的块中，不需要复杂的算法来定位、识别和压缩数据，从而显著减少了数据量。此外，列式存储（Column Storage）支持跨多个处理器核心的并行执行，因为列存储中的数据天生就是垂直分区的，允许并行处理不同列上的操作。内存数据库系统在读写操作上都提供了高性能，同时支持事务处理和分析型用例。这些能力通过文本分析和搜索、地理空间处理、时间序列分析、流处理和空间处理等功能得到进一步增强。内存数据库管理系统还提供了人工智能库和运行时环境，如图7.3所示，这些在嵌入式人工智能架构的背景下被加以利用。

---

As previously discussed, the fundamental data model is realized through the use of views, which assist developers in constructing semantically rich data models. By extending SQL, views enable the definition and consumption of these data models in applications, resulting in enhanced productivity, usability, performance, and interoperability. Views are built on a collection of domain-specific languages and services designed to define and consume semantically enriched data models:

**【译文】** 如前所述，基础数据模型是通过使用视图（Views）来实现的，这有助于开发人员构建语义丰富的数据模型。通过扩展SQL，视图支持在应用程序中定义和使用这些数据模型，从而提高生产力、可用性、性能和互操作性。视图构建在一系列特定领域的语言和服务之上，旨在定义和使用语义丰富的数据模型：

---

• Data Definition Language (DDL) is used to define semantically rich domain data models and retrieve them, extending native SQL for increased productivity
• Query Language (QL) is used for consuming view entities through platform-­embedded SQL and reading data
• Data Control Language (DCL) establishes authorizations for views and manages data access, integrating with authorization concepts
• Data Manipulation Language (DML) is utilized for writing data

**【译文】** • 数据定义语言（DDL）：用于定义语义丰富的领域数据模型并检索它们，扩展了原生SQL以提高生产力
• 查询语言（QL）：用于通过平台嵌入式SQL使用视图实体并读取数据
• 数据控制语言（DCL）：为视图建立权限控制并管理数据访问，与授权概念集成
• 数据操纵语言（DML）：用于写入数据

---

Core data models are defined and consumed at the database level rather than the application level, providing capabilities that surpass conventional data modeling tools. This approach supports SQL-compliant view definitions, allowing developers to use SQL features like JOIN, UNION, and WHERE clauses. Associations can be used to model relationships between views, while aliases can rename tables with more understandable names. Views also support annotations for defining metadata, such as specifying that a DateTime field contains the creation or last update time. Other core data model capabilities include parameters, view extensions, easy expo­sure as OData services, and anchors for behavior definitions. Annotations allow for the classification of entities based on their permissible reuse options and provided content.

**【译文】** 核心数据模型在数据库层面而非应用层面进行定义和使用，提供了超越传统数据建模工具的能力。这种方法支持兼容SQL的视图定义，允许开发人员使用JOIN、UNION和WHERE子句等SQL特性。关联（Associations）可用于建立视图之间的关系模型，而别名（Aliases）可以用更易懂的名称重命名表。视图还支持用于定义元数据的注释（Annotations），例如指定某个日期时间字段包含创建时间或最后更新时间。其他核心数据模型功能包括参数、视图扩展、易于作为OData服务发布，以及行为定义的锚点。注释允许根据实体的允许重用选项和提供的内容对其进行分类。

---

more data was exchanged between the database and application server than ­necessary. Additionally, data-intensive operations were performed on the applica­tion server rather than the database for better performance. However, modern ERP products supporting in-memory database systems have enabled significant optimi­zation. As depicted in Fig. 7.3, an SQL view on the database system is generated for each view defined at the application server level. All SQL statements applied to the views are pushed down to the SQL view and executed at the database level for opti­mal performance.

**【译文】** （在传统架构中，）数据库和应用服务器之间交换的数据量往往超出了必要限度。此外，为了获得更好的性能，数据密集型操作是在应用服务器上而不是在数据库上执行的。然而，支持内存数据库系统的现代企业资源规划（ERP）产品实现了显著的优化。如图7.3所示，针对应用服务器层面定义的每个视图，都会在数据库系统上生成一个SQL视图。应用于这些视图的所有SQL语句都会下推（push down）到SQL视图，并在数据库层面执行，以获得最佳性能。

---

For example, authorization checks, which were previously per­formed on the ERP application server, are now pushed down to the database system by automatically enhancing SQL statements with a WHERE clause. Core data mod­els consist of thousands of views, as all business processes use them to access appli­cation data. As a result, the performance of all these business processes can be systematically improved, as all data access is pushed down to the database system.

**【译文】** 例如，以前在ERP应用服务器上执行的权限检查，现在通过自动向SQL语句添加WHERE子句，下推到数据库系统执行。核心数据模型由数千个视图组成，因为所有业务流程都使用它们来访问应用数据。因此，所有这些业务流程的性能都能得到系统性的提升，因为所有数据访问都下推到了数据库系统。

---

Views can be defined with SQL statements or coded with SQLScript, typically using the classes of the underlying programming language of the application server. During runtime, the SQLScript code is pushed down to the database for optimal performance. When the view logic is too complex to be expressed by SQL state­ments, the scripted approach is facilitated. From a consumption standpoint, there is no difference between views based on SQL declarations or SQLScript coding.

**【译文】** 视图可以通过SQL语句定义，也可以使用SQLScript编码，通常使用应用服务器底层编程语言的类。在运行时，SQLScript代码会被下推到数据库以获得最佳性能。当视图逻辑过于复杂，无法仅用SQL语句表达时，就会采用这种脚本编写方式。从使用的角度来看，基于SQL声明的视图和基于SQLScript编码的视图之间没有区别。

---

