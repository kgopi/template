export default class View{

    public options;

    constructor(options={}){
        this.options = options;
        this.delegateEvents();
    }

    render(){
        
    }

    delegateEvents(){

    }

    undelegateEvents(){

    }

    destroy(){
        this.undelegateEvents();
    }

    events(){
        return {};
    }

    init(){

    };

}