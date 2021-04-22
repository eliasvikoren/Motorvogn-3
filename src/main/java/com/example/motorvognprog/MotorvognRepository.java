package com.example.motorvognprog;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MotorvognRepository {

    private final List<Motorvogn> alleMotorvogner = new ArrayList<>();
    private final List<Bil> alleBiler = new ArrayList<>();

    public MotorvognRepository(){
        Bil bil1 = new Bil("Volvo", "V30");
        Bil bil2 = new Bil("Volvo", "V70");
        Bil bil3 = new Bil("Volvo", "V91");
        Bil bil4 = new Bil("Audi", "A8");
        Bil bil5 = new Bil("Audi", "Q7");
        Bil bil6 = new Bil("Audi", "R8");
        alleBiler.add(bil1);
        alleBiler.add(bil2);
        alleBiler.add(bil3);
        alleBiler.add(bil4);
        alleBiler.add(bil5);
        alleBiler.add(bil6);
    }

    public void lagreMotorvogn(Motorvogn innMotorvogn){
        alleMotorvogner.add(innMotorvogn);
    }

    public List<Motorvogn> hentAlleMotorvogner(){
        return alleMotorvogner;
    }

    public List<Bil> hentAlleBiler(){
        return alleBiler;
    }

    public void slettAlleMotorvogner(){
        alleMotorvogner.clear();
    }
}
