# codegenerator
I developed an app with **Featherjs**, which in the real work I did, There are more than two hundred tables. I was too lazy to create patterns repeatedly since starting *sequence* and *tables* in the **Postgres** and **Featherjs** *model*, *class*, *service*, so I developed a program for generating code to reduce the development time.

The steps are as follows.
1. Download this code.
2. Prepare a list of objects that you want to generate.
```javascript
   generateList/itemList.json
 ``` 
 Item|Description
 --- | ---
 objects|Class name, service, table, hook, configure (feather), table (postgres), sequence (postgres)
 models|Specifies the database data type field name. 
 * Currently supports only data types.
  int => INTEGER,timestamp => DATE, bool => Boolean by default is STRING

 
 **Example**
 ```json
 {
  "objects":
  [
    "users",
    "request_licenses",
    "request_license_upload_files",
    "files",
    "file_streams",
    "payment_header",
    "payment_detail"
   ],
   "models":
   [
     
      "payment_header": [
        {"field":"id","dataType":"int","isRequired":"Y"},
        {"field":"member_id","dataType":"int","isRequired":"Y"},
        {"field":"document_type_id","dataType":"smallint","isRequired":"Y"},
        {"field":"document_ref_id","dataType":"varchar(50)","isRequired":"Y"},
        {"field":"payment_date","dataType":"timestamp","isRequired":"Y"},
        {"field":"payment_method_id","dataType":"smallint","isRequired":"Y"},
        {"field":"payment_ref_id","dataType":"varchar(50)","isRequired":""},
        {"field":"total_price","dataType":"numeric(18,6)","isRequired":"Y"},
        {"field":"total_tax","dataType":"numeric(18,6)","isRequired":"Y"},
        {"field":"total_amount","dataType":"numeric(18,6)","isRequired":"Y"},
        {"field":"createdAt","dataType":"timestamp","isRequired":"Y"},
        {"field":"createdBy","dataType":"varchar(255)","isRequired":"Y"},
        {"field":"updatedAt","dataType":"timestamp","isRequired":""},
        {"field":"updatedBy","dataType":"varchar(255)","isRequired":""},
        {"field":"status_id","dataType":"smallint","isRequired":"Y"}
      ],
        "file_streams": [
        {"field":"id","dataType":"int","isRequired":"Y"},
        {"field":"file_id","dataType":"int","isRequired":"Y"},
        {"field":"stream_position","dataType":"int","isRequired":"Y"},
        {"field":"file_contents","dataType":"bytea[]","isRequired":"Y"},
        {"field":"createdAt","dataType":"timestamp","isRequired":"Y"},
        {"field":"createdBy","dataType":"varchar(255)","isRequired":"Y"},
        {"field":"updatedAt","dataType":"timestamp","isRequired":""},
        {"field":"updatedBy","dataType":"varchar(255)","isRequired":""}
      ]
  
   ]
  }
 ``` 
 

3. Prepare a configuration.
 ```json
 config.json
 ```
  Item|Description
 --- | ---
 outputFolder| Root output folder.
 owner| For postgres database owner.
 schema| For Postgres database schema.
 templateFile|<dl><dt>/template/featherClass.js</dt> <dd>For Generate Feather Class.</dd><dt>/template/featherModel.js</dt> <dd>For Generate Feather Model.</dd><dt>/template/featherService.js</dt> <dd>For Generate Feather Service.</dd> <dt>/template/featherRegister.js</dt> <dd>For Register Feather Service.</dd> <dt>/template/postgresMasterTable.sql</dt> <dd>For Generate Create Table sql of Postgres</dd> <dt>/template/postgresSequence.sql</dt> <dd>For Generate Create Sequence sql of Postgres</dd></dl>
 genType|<dl><dt>class</dt> <dd>For Generate Feather Class.</dd><dt>model</dt> <dd>For Generate Feather Model.</dd><dt>service</dt> <dd>For Generate Feather Service.</dd> <dt>configure</dt> <dd>For Register Feather Service.</dd> <dt>table</dt> <dd>For Generate Create Table sql of Postgres</dd> <dt>sequence</dt> <dd>For Generate Create Sequence sql of Postgres</dd></dl>
 provider|<dl><dt>feather</dt> <dd>For Featherjs</dd><dt>postgre</dt><dd>For Postgres</dd></dl>
 
4. Run it.
 ```bash
 node index
 ```
5. Got your files !!!

Made your happy.
