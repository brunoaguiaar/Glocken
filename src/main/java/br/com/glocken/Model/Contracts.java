package br.com.glocken.Model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Contracts implements Serializable {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_PERMISSION")
    @SequenceGenerator(name = "SEQ_PERMISSION", sequenceName = "SEQ_PERMISSION", allocationSize = 1)
	@Column(name = "CONTRACT_ID")
    private Long id;
	
    @Basic(optional = false)
    @Column(name = "CONTRACT_STARTEDON")
    private Date startedOn;

	@Basic(optional = false)
    @Column(name = "CONTRACT_ENDON")
    private Date endOn;

    @Basic(optional = false)
    @Column(name = "CONTRACT_PAYMENTMETHOD")
    private int paymentMethod;

    @Basic(optional = false)
    @Column(name = "CONTRACT_DAYSOFWEEK")
    private int daysOfWeek;

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getStartedOn() {
		return startedOn;
	}

	public void setStartedOn(Date startedOn) {
		this.startedOn = startedOn;
	}

	public Date getEndOn() {
		return endOn;
	}

	public void setEndOn(Date endOn) {
		this.endOn = endOn;
	}

	public int getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(int paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public int getDaysOfWeek() {
		return daysOfWeek;
	}

	public void setDaysOfWeek(int daysOfWeek) {
		this.daysOfWeek = daysOfWeek;
	}
}
