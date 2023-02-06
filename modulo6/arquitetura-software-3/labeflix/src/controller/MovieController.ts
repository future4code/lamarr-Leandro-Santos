import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { CustomError } from "../error/CustomError";
import { movieDTO } from "../model/movieDTO";
import { Movie } from "../types/Movie";

export class MovieController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release } =
        req.body;
      const input: movieDTO = {
        title,
        description,
        duration_in_minutes,
        year_of_release,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getMovies = async (req: Request, res: Response) => {
    try {
      const movieBusiness = new MovieBusiness();
      const movies = await movieBusiness.getMovies();

      res.status(201).send(movies);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
