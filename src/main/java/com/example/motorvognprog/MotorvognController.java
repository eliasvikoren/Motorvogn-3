package com.example.motorvognprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    @Autowired
    private MotorvognRepository rep;

    @PostMapping("/lagreMotorvogn")
    public void lagreMotorvogn(Motorvogn innMotorvogn){
        rep.lagreMotorvogn(innMotorvogn);
    }

    @GetMapping("/hentAlleMotorvogner")
    public List<Motorvogn> hentAlleMotorvogner(){
        return rep.hentAlleMotorvogner();
    }

    @GetMapping("/hentAlleBiler")
    public List<Bil> hentAlleBiler(){
        return rep.hentAlleBiler();
    }

    @PostMapping("/slettAlleMotorvogner")
    public void slettAlleMotorvogner(){
        rep.slettAlleMotorvogner();
    }
}
