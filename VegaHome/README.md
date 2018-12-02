- Start a mssql-server instance using the latest update for SQL Server 2017:
	docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 -d microsoft/mssql-server-linux:latest
	* -e: envirmeoment viaraible setzen

FAQs:
	* Why do you use  ng-bootstrap?--> because angular does not support modal diagal, carousel  from Bootstrap
 Projekt Meilenstein:
	* Projekt Vorbereitung
		- Schriftarte embedded --> fonts.google.com
		- Montserrat schriftart?
		- Icon Pack embedded --> https://worldwidehigh.github.io/simple-line-icons/
	


- Connect to Microsoft SQL Server via Docker (sich vorstellen)
	docker exec -it <container_id|container_name> /opt/mssql-tools/bin/sqlcmd -S <ip-addre> -U sa -P <your_password>
	docker exec -it hdg4158hs /opt/mssql-tools/bin/sqlcmd -S 192.168.99.100 -U sa -P MyComplexPassword!123
	* -S: Server who the Container liegen (unterschied mit drop box for docker)
	* -P: Passwork angabe

- Erstellen einer neuen Datenbank
   CREATE DATABASE TestDB
   GO
   * Go um die Befehl durchzufühen
 
- [DATABASE-LIST]: Anzeige all Databases in SQL_APPLICATION/CONTAINERS
	SELECT Name from sys.Databases
	GO
	* you must be connected to datbase
	* Database is ein container von Table.
	SELECT name, database_id, create_date  FROM sys.databases 
	GO
	

- [TABLE-LIST] Anzeige all table from database
	SELECT * FROM   SYSOBJECTS WHERE   xtype = 'U'; GO
 

- HOW TO excute a commnds in Table ?
	-  USE vega
	-  Select * from  features

* Hirarchie
SQL_APPLICATION
|- DATABASE-LIST
	|- TABLE-LIST
		|-Columns-Lists
		|- Rows-Lists

