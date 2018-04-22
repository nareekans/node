module.exports = function(RED) {
    function helloWorld(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;
        this.on('input', function(msg) {

        var outMsg = {payload: "FaceDetection"};
    
        node.send(outMsg);
        
        });

        // this.status({fill:"red",shape:"ring",text:"disconnected"});
        // this.status({fill:"green",shape:"dot",text:"connected"});
    }
    RED.nodes.registerType("FaceDetection",helloWorld);
};
