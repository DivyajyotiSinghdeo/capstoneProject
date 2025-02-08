package com.wecp.logisticsmanagementandtrackingsystem.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;


@Entity
public class Driver {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     Long id;
     String name;
     String email;

     @OneToMany(cascade = CascadeType.ALL)
     @JsonManagedReference
     private List<Cargo> assignedCargos;

     public Driver() {
     }

     public Driver(Long id, String name, String email) {
          this.id = id;
          this.name = name;
          this.email = email;
     }

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

     public List<Cargo> getAssignedCargos() {
          return assignedCargos;
     }

     public void setAssignedCargos(List<Cargo> assignedCargos) {
          this.assignedCargos = assignedCargos;
     }

}
