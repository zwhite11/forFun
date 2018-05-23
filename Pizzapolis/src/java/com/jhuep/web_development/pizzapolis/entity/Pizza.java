package com.jhuep.web_development.pizzapolis.entity;
// Generated May 9, 2017 4:30:58 PM by Hibernate Tools 4.3.1

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * Pizza generated by hbm2java
 */
public class Pizza implements java.io.Serializable {

    private Integer id;
    private PizzaCrust pizzaCrust;
    private PizzaSauce pizzaSauce;
    private String size;
    private Set<Toppings> toppingses = new HashSet<Toppings>(0);
    private Set<OrderPizza> orderPizzas = new HashSet<OrderPizza>(0);

    public Pizza() {
    }

    public Pizza(PizzaCrust pizzaCrust, PizzaSauce pizzaSauce, String size, Set<Toppings> toppingses, Set<OrderPizza> orderPizzas) {
        this.pizzaCrust = pizzaCrust;
        this.pizzaSauce = pizzaSauce;
        this.size = size;
        this.toppingses = toppingses;
        this.orderPizzas = orderPizzas;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PizzaCrust getPizzaCrust() {
        return this.pizzaCrust;
    }

    public void setPizzaCrust(PizzaCrust pizzaCrust) {
        this.pizzaCrust = pizzaCrust;
    }

    public PizzaSauce getPizzaSauce() {
        return this.pizzaSauce;
    }

    public void setPizzaSauce(PizzaSauce pizzaSauce) {
        this.pizzaSauce = pizzaSauce;
    }

    public String getSize() {
        return this.size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Set<Toppings> getToppingses() {
        return this.toppingses;
    }

    public void setToppingses(Set<Toppings> toppingses) {
        this.toppingses = toppingses;
    }

    public Set<OrderPizza> getOrderPizzas() {
        return this.orderPizzas;
    }

    public void setOrderPizzas(Set<OrderPizza> orderPizzas) {
        this.orderPizzas = orderPizzas;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.pizzaCrust);
        hash = 79 * hash + Objects.hashCode(this.pizzaSauce);
        hash = 79 * hash + Objects.hashCode(this.size);
        hash = 79 * hash + Objects.hashCode(this.toppingses);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Pizza other = (Pizza) obj;
        if (!Objects.equals(this.pizzaCrust, other.pizzaCrust)) {
            return false;
        }
        if (!Objects.equals(this.pizzaSauce, other.pizzaSauce)) {
            return false;
        }
        if (!Objects.equals(this.toppingses, other.toppingses)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Pizza{" + "id=" + id + ", pizzaCrust=" + pizzaCrust + ", pizzaSauce=" + pizzaSauce + ", size=" + size + ", toppingses=" + toppingses + '}';
    }

}
