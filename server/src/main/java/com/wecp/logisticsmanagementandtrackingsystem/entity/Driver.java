package com.wecp.logisticsmanagementandtrackingsystem.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
<<<<<<< HEAD

    @OneToOne
    @JoinColumn(name="user_id")
=======
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561
    private Long userId; 

    @OneToMany(mappedBy = "driver")
    @JsonIgnore
    private List<Cargo> assignedCargos;

<<<<<<< HEAD


=======
>>>>>>> 740b8d87bffaf2c1c57d30cdc4d5f56e7738f561
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setAssignedCargos(List<Cargo> assignedCargos) {
        this.assignedCargos = assignedCargos;
    }

    public List<Cargo> getAssignedCargos() {
        return assignedCargos;
    }


}