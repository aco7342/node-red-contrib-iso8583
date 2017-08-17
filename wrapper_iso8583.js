module.exports = function(RED) {
    "use strict";
    var ISO8583 = require('iso-8583');
    
    function Iso8583Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var messageS2 = new ISO8583.Message();
            var msgS2 = msg.payload;          
            var msgS2T =( typeof msgS2 === 'string' )
                       
            if (!msgS2T) { // monta iso8583 com array, devolvendo string
                node.log( "(isNotString) Array to string" );
                var packedMessageS2 = messageS2.packSync(msgS2);
                var _msg ='';
                for (var x = 0 ; x < packedMessageS2.length ; x++) {
                    _msg = _msg + packedMessageS2[ x ];
                }
                msg.payload = _msg;
            } else {
                node.log( "(isString) Msg to array" );
                var msgR = new Buffer( msgS2, "hex"); // desmonta iso8583 do texto, devolvendo array
                var lenR = msgR.length;
                var unpackedMessageR = messageS2.unpackSync(msgR, lenR);
                msg.payload = unpackedMessageR;
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("Iso-8583w",Iso8583Node);

}