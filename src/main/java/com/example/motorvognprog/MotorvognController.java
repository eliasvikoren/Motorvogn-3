package com.example.motorvognprog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    private final List<Motorvogn> alleMotorvogner = new ArrayList<>();
    private final List<Bil> alleBiler = new ArrayList<>();

    public MotorvognController(){
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

    @PostMapping("/lagreMotorvogn")
    public void lagreMotorvogn(Motorvogn innMotorvogn){
        alleMotorvogner.add(innMotorvogn);
    }

    @GetMapping("/hentAlleMotorvogner")
    public List<Motorvogn> hentAlleMotorvogner(){
        return alleMotorvogner;
    }

    @GetMapping("/hentAlleBiler")
    public List<Bil> hentAlleBiler(){
        return alleBiler;
    }

    @PostMapping("/slettAlleMotorvogner")
    public void slettAlleMotorvogner(){
        alleMotorvogner.clear();
    }
}
