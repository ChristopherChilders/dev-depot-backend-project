const db = require('./conn');

class Message {
    constructor (id, user_id, content, created_at) {
        this.id = id;
        this.userId = user_id;
        this.content = content;
        this.createdAt = created_at;
    }
    static getAll () {
        db.any(`select * from message_board`)
        .then((arrayOfMessages) => {
            return arrayOfMessages.map((messageData) => {
                const aMessage = new Message (
                    messageData.id,
                    messageData.user_id,
                    messageData.content,
                    messageData.created_at
                );
                return aMessage;
            })
        })
    }
    static getById (id) {
        db.one(`select * from message_board where id=${id}`)
        .then((messageData) => {
            const messageInstance = new Message (
                messageData.id,
                messageData.user_id,
                messageData.content,
                messageData.created_at
            );
            return messageInstance;
        })
        .catch(() => {
            return null;
        })
    }
    static delete(id) {
        return db.result('delete from message_board where id=$1', [id]);
    }
    
    static add(messageData) {
        return db.one(`
            insert into message_board 
                (user_id, content, timestamp)
            values 
                ($1, $2, $3)
            returning id, user_id, content, timestamp
        `, [messageData.user_id, messageData.content, messageData.created_at])
        .then((data) => {
            // console.log(data);
            return data.id;
        })
    }
    
    save() {
        //This is used to add new users
        return db.result(`            
        update users set 
            user_id='${this.userId}',
            content='${this.content}',
            timestamp='${this.createdAt}'
        where id=${this.id}
        `);
    }
}

module.exports = Message;