package com.spe.PWR.Entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Producer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long producerId;


    @Column
    @NotNull
    private String producerName;

    @Column
    @NotNull
    private String producerpassword;

    @Column
    @NotNull
    private Date producerdob;

    @JsonIgnore
    @OneToMany(mappedBy = "producer", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Business> producerBusiness;

    @Column
    @NotNull
    private String producerDesc;

    @Column
    @NotNull
    private String producerCity;


    @Column
    @NotNull
    private String producerState;

    @Column
    @NotNull
    private String producerPincode;

    @NotNull
    @Column
    private boolean producerVerified;

    @NotNull
    @Column
    private String producerLevel;

    public long getProducerId() {
        return producerId;
    }

    public void setProducerId(long producerId) {
        this.producerId = producerId;
    }

    public String getProducerName() {
        return producerName;
    }

    public void setProducerName(String producerName) {
        this.producerName = producerName;
    }

    public Date getProductdob() {
        return producerdob;
    }

    public void setProductdob(Date producerdob) {
        this.producerdob = producerdob;
    }

    public List<Business> getProducerBusiness() {
        return producerBusiness;
    }

    public void setProducerBusiness(List<Business> producerBusiness) {
        this.producerBusiness = producerBusiness;
    }

    public String getProducerDesc() {
        return producerDesc;
    }

    public void setProducerDesc(String producerDesc) {
        this.producerDesc = producerDesc;
    }

    public String getProducerCity() {
        return producerCity;
    }

    public void setProducerCity(String producerCity) {
        this.producerCity = producerCity;
    }

    public String getProducerState() {
        return producerState;
    }

    public void setProducerState(String producerState) {
        this.producerState = producerState;
    }

    public String getProducerPincode() {
        return producerPincode;
    }

    public void setProducerPincode(String producerPincode) {
        this.producerPincode = producerPincode;
    }

    public boolean isProducerVerified() {
        return producerVerified;
    }

    public void setProducerVerified(boolean producerVerified) {
        this.producerVerified = producerVerified;
    }

    public String getProducerLevel() {
        return producerLevel;
    }

    public void setProducerLevel(String producerLevel) {
        this.producerLevel = producerLevel;
    }

    public String getProducerpassword() {
        return producerpassword;
    }

    public void setProducerpassword(String producerpassword) {
        this.producerpassword = producerpassword;
    }

    public Date getProducerdob() {
        return producerdob;
    }

    public void setProducerdob(Date producerdob) {
        this.producerdob = producerdob;
    }

    @Override
    public String toString() {
        return "Producer{" +
                "producerId=" + producerId +
                ", producerName='" + producerName + '\'' +
                ", producerpassword='" + producerpassword + '\'' +
                ", producerdob=" + producerdob +
                ", producerBusiness=" + producerBusiness +
                ", producerDesc='" + producerDesc + '\'' +
                ", producerCity='" + producerCity + '\'' +
                ", producerState='" + producerState + '\'' +
                ", producerPincode='" + producerPincode + '\'' +
                ", producerVerified=" + producerVerified +
                ", producerLevel='" + producerLevel + '\'' +
                '}';
    }
}