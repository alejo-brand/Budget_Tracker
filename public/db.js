let db;

const request = indexedDB.open("budget", 1);
request.onupgradeneeded = function(event){
  const db = event.target.result;
  db.createObjectStore("pending",{autoIncrement:true});
};

request.onsuccess = function(event){
  db = event.target.result;
  if(navigator.onLine){
    checkDatabase();
  }
};

request.onerror = function(event){
  console.log("Sorry! there has been an error" + event.target.errorCode);
};

function saveRecord(record){
  const transaction = db.transaction(["transaction"],"readwrite");
  const store = transaction.objectStore("transaction");
  store.add(record);
};

