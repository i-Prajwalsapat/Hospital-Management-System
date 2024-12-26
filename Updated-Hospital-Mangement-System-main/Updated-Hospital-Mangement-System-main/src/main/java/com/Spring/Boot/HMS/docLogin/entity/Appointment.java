package com.Spring.Boot.HMS.docLogin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="name")
	private String name;
	@Column(name="age")
	private String age;
	@Column(name="symtomps")
	private String symtomps;
	@Column(name="number")
	private String number;
	
	public Appointment() {
		
	}
	
	public Appointment(String name, String age, String symtomps, String number) {
		super();
		this.name = name;
		this.age = age;
		this.symtomps = symtomps;
		this.number = number;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getSymptoms() {
		return symtomps;
	}
	public void setSymptoms(String symptoms) {
		this.symtomps = symptoms;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}


}
