import {connect} from 'mongoose'; 

export async function startConection() {
    await connect('mongodb://localhost/desvarece-db',{
        useNewUrlParser : true,
        useFindAndModify : false
    });
    console.log('Database is conected');
}