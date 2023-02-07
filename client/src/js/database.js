import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
    console.log('Content added to the database');

    const contactDb = await openDB('contact', 1);
    const tx = contactDb.transaction('contact', 'readwrite');
    const store = tx.objectStore('contact');
    const request = store.add({ content: content});
    const result = await request;
    console.log ('Data saved to the database', result)
}

//console.error('putDb not implemented'); Not sure how to use this...

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
    console.log('Get content from the database');

    const contactDb = await openDB('contact', 1);
    const tx = contactDb.transaction('contact', 'readonly');
    const store = tx.objectStore('contact');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result;
}

//console.error('getDb not implemented'); Not sure how to use this...

//Adding delete function, not sure if this is needed but it's worth a try :)

export const deleteDb = async (id) => {
    console.log('Deleting content from database');

    const contactDb = await openDB('contact', 1);
    const tx = contactDb.transaction('contact', 'readwrite');
    const store = tx.objectStore('contact');
    const request = store.delete(id);
    const result = await request;
    console.log('result.value', result);
    return result?.value;
};


initdb();
