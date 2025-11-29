class shape{
    public:
    int l;
    int b;

    public:
    void area(){
        cout<< "Bhai Jaan apka area ye raha:- "<< l*b;
    }

    shape(int length, int breadth){
        l = length;
        b = breadth;
    }

}


int main() {
    
    shape obj1 = new shape(10,20);
    obj1.area();
    

    return 0;   
}