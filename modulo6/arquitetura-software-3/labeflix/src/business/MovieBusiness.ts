import { MovieDatabase } from "../data/MovieDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidDescription } from "../error/MovieErrors";

import { movieDTO, MovieInputDTO } from "../model/movieDTO";
import { generateId } from "../services/idGenerator";

export class MovieBusiness {
  public create = async (input: movieDTO) => {
    const { title, description, duration_in_minutes, year_of_release } = input;

    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new CustomError(
        400,
        '"title", "description", "duration_in_minutes" e "year_of_release" são obrigatórios'
      );
    }

    if (description.length <= 30) {
      throw new InvalidDescription();
    }

    const id = generateId();

    const movieDatabase = new MovieDatabase();

    const taskInput: MovieInputDTO = {
      id: id,
      title: title,
      description: description,
      duration_in_minutes: duration_in_minutes,
      year_of_release: year_of_release,
    };
    await movieDatabase.create({
      taskInput,
    });
  };

  public getMovies = async () => {
    try {
      const movieDatabase = new MovieDatabase();
      return await movieDatabase.getMovies();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
