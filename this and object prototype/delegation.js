// Delegation Theory

var Task = {
    setId : function ( ID ) {
         this.id = ID;
    },
   outputID : function () {
          console.log( this.id );
   }
};

// make delegate to the `Task`

var XYZ = Object.create( Task );

XYZ.prepareTask = function ( ID , Label) {
    this.setId( Id );
    this.label = Label;
    
};
XYZ.outputTaskDetails = function ( ) {

    this.outputID();
    console.log( this.label  );
}