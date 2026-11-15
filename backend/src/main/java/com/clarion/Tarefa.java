package com.clarion;

import jakarta.persistence.*;

@Entity
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String titulo;
    public boolean concluida;
    public Long usuarioId;
}