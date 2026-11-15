package com.clarion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {
    @Autowired
    TarefaRepository repo;

    @GetMapping
    public List<Tarefa> listar(@RequestHeader("Authorization") String token) {
        Long userId = AuthController.validar(token.replace("Bearer ", ""));
        return repo.findByUsuarioId(userId);
    }

    @PostMapping
    public Tarefa criar(@RequestHeader("Authorization") String token, @RequestBody Tarefa t) {
        t.usuarioId = AuthController.validar(token.replace("Bearer ", ""));
        return repo.save(t);
    }

    @PutMapping("/{id}")
    public Tarefa editar(@PathVariable Long id, @RequestBody Tarefa t) {
        Tarefa existente = repo.findById(id).orElseThrow();
        existente.titulo = t.titulo;
        existente.concluida = t.concluida;
        return repo.save(existente);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repo.deleteById(id);
    }
}