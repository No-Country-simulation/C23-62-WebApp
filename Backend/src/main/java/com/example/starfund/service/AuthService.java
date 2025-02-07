package com.example.starfund.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public boolean authenticate(String username, String password) {
        // Aquí iría la lógica de autenticación, por ejemplo, consultar la base de datos
        // Por simplicidad, vamos a asumir que cualquier usuario con username "user" y password "password" es válido
        return "user".equals(username) && "password".equals(password);
    }
}