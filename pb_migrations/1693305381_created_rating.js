/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t4ik90755xvoxdv",
    "created": "2023-08-29 10:36:21.855Z",
    "updated": "2023-08-29 10:36:21.855Z",
    "name": "rating",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oqmuujzv",
        "name": "rate",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t4ik90755xvoxdv");

  return dao.deleteCollection(collection);
})
