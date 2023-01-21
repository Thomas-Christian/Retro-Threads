# RetroThreads 

A marketplace for 'buying' and 'selling' vintage and secondhand fashion items.  

Developed by myself as my final project. Due to time constraints I was unable to add everything I had hoped to. I plan to keep working on this!

# API 

| Method | Path         | Purpose         |
| ------ | ------------ | --------------- |
| :---   | :---         | :---            |
| GET    | /item/view/all | Get all items |
| GET    | /item/view/home | Get 5 items for homepage |
| GET    | /item/view/:id | Get item by id |
| GET    | /item/style/:style | Get all items matching a style |
| POST   | /item/new     | Add an item   |
| DELETE | /item/delete/:id | Delete an item |
| PUT  | /item/edit/:id | Edit an item   |
| :---   | :---         | :---            |
| GET    | /user/:id | Get user by id |
| POST   | /user/sign-up     | Add a user  |
| POST   | /user/login     | Login as a user   |
