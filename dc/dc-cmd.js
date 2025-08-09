// command의 구성
/**
 * {
 *     cmd : "ping",
 *     channel : "react",
 *
 *     // react: default    // 메세지를 보낸 채널을 대상으로 합니다. message.channel.send("채널 메세지");
 *     // reply             // 메세지를 대상으로 합니다. ex) message.reply("답글");
 *     // 그 외              // channel란에 적힌 명칭을 다음과 같이 찾아옵니다.
 *                          // message.guild.channels.cache.find(channel => channel.name === 'name')
 *
 *     query : "명령어 뒤의 모든 인자들을 항상 String Data Type 으로 가져옵니다."
 * }
 */

const findChannel = (message, name) => {
    return message.guild.channels.cache.find(channel => channel.name === name);
}

// Target Channel을 선별
__ = {
    "knock" : "react",
    "ping" : "reply",
    "welcome" : "welcome",
    "help" : "react",
    "add" : "reply",
    "remove" : "reply",
}

// Invoke될 명령어
_ = {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 기본 명령어
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Command Name : knock
     * Target Channel : message.channel
     * Purpose : BOT이 온라인 상태인지 확인합니다.
     * Query : String
     * Response : String
     */
    knock : (message) => {
        return "누가 거기 있나요? 👀\n(봇이 잘 동작 중 이에요!)";
    },
    /**
     * Command Name : ping
     * Target Channel : message.channel
     * Purpose : BOT이 정상적으로 명령어를 송수신하는지 확인합니다.
     * Query : String
     * Response : String
     *
     */
    ping : (message) => {
        return "🏓 Pong!";
    },
    /**
     * Command Name : welcome
     * Target Channel : message.guild.channels.cache.find(channel => channel.name === 'welcome')
     * Purpose : 신규 유저가 착륙했을 때 인삿말(공지)을 건넵니다.
     * Query : String
     * Response : String
     */
    welcome : (message) => {
        return "커뜨개차 채널에 오신 것을 환영합니다!\n아래 규칙을 잘 읽어주세요.\n사실 규칙은 없습니다!";
    },
    /**
     * Command Name : help
     * Target Channel : message.channel
     * Purpose : 명령어 사용법을 불러옵니다, 이 객체에 주석을 포함시켜 pretty 한 json 형태로 제공할까 생각됩니다.
     * Query : String
     * Response : String
     */
    help : (message) => {
        return "명령어 사용법을 불러옵니다, 이 객체에 주석을 포함시켜 pretty 한 json 형태로 제공할까 생각됩니다";
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 커스터마이즈 명령어 추가 및 제거
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //TODO
    add : (message) => {
        console.log("message : ", message);
        return "정상적으로 추가되었습니다.";
    },
    //TODO
    remove : (message) => {
        console.log("message : ", message);
        return "정상적으로 추가되었습니다.";
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Music Player
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Message Broker
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Researcher
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}

let czCommands = {};

(function() {
    // 항상 저장된 cz commands를 불러옵니다.
})();