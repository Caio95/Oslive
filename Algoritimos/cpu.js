function CPU(){

    this.processo = null;
    this.ocupado = false;

	this.alocaProcesso = function(p){
		if(this.ocupado){
			return false;
		}
		else{
			this.processo = p;
			this.ocupado = true;
			return true;
		}
	};

	this.retiraProcesso = function(){
		var p = this.processo;
		this.processo = null;
		this.ocupado = false;
		return p;
	}


	this.act = function(){
		var p = this.processo;

		if(!this.ocupado)
			return null;

		if(this.processo.incrTExecucao()){
			this.processo = null;
			this.ocupado = false;
		}
		return p;
	};

}