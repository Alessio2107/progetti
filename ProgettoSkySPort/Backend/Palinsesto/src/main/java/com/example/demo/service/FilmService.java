package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Film;
import com.example.demo.repository.FilmRepository;

@Service
public class FilmService {
	@Autowired
	FilmRepository filmRepository;

	public String aggiungi(Film film) {
		// TODO Auto-generated method stub
		filmRepository.save(film);
		String salvataggio= "Salvataggio effettuato con successo";
		return salvataggio;
	}

	public String elimina(Long id) {
		// TODO Auto-generated method stub
		//Film f= filmRepository.getReferenceById(id);
		filmRepository.deleteById(id);
		String eliminazione="Eliminazione avvenuta con successo";
		return eliminazione;
	}

	public List<Film> mostraTutto() {
		// TODO Auto-generated method stub
		return filmRepository.findAll();
	}

	public List<Film> filtraPerAnno(int anno) {
		// TODO Auto-generated method stub
		List<Film> listaAppoggio= new ArrayList<>();
		listaAppoggio=filmRepository.findAll().stream()
				.filter(k-> k.getAnnoUscitaDelFilm()==anno)
				.collect(Collectors.toList());
		return listaAppoggio;
	}

	public List<Film> cercaPerNome(String nome) {
		// TODO Auto-generated method stub
		List<Film> listaAppoggio2= new ArrayList<>();
		listaAppoggio2=filmRepository.findAll().stream()
				.filter(k-> k.getNome().toLowerCase()
						.contains(nome.toLowerCase()))
				.collect(Collectors.toList());
		return listaAppoggio2;
	}

	public Film modificaFilmPerId(Long id, Film film) {
		// TODO Auto-generated method stub
		Film filmConReference= filmRepository.getReferenceById(id);
		filmConReference.setAnnoUscitaDelFilm(film.getAnnoUscitaDelFilm());
		filmConReference.setDurata(film.getDurata());
		filmConReference.setGenere(film.getGenere());
		filmConReference.setNome(film.getNome());
		filmConReference.setRegista(film.getRegista());
		
		return filmRepository.save(filmConReference);
		
	}
	public List<Film> cercaPerRegista(String regista) {
		// TODO Auto-generated method stub
		List<Film> listaAppoggio3= new ArrayList<>();
		listaAppoggio3=filmRepository.findAll().stream()
				.filter(k-> k.getRegista().toLowerCase()
						.contains(regista.toLowerCase()))
				.collect(Collectors.toList());
		return listaAppoggio3;
	}
	
	
	

}
