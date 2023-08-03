<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EmailsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/ahmed' , function(){
    return Inertia::render('Ahmed');
});

Route::get('/leaderboard', [EmailsController::class, 'showLeaderboard'])->name('leaderboard.show');

Route::get('/main' , function(){
    return Inertia::render('Project/views/MainPage');
});

Route::middleware('auth')->group(function () {
    Route::get('/game', [EmailsController::class, 'index'])->name('game.index');
    Route::post('/game/helpUsed', [EmailsController::class, 'help']);
    Route::post('/game/unread', [EmailsController::class, 'unread'])->name('game.unread');
    Route::post('/game/response', [EmailsController::class, 'response'])->name('game.response');
    Route::post('/game/addNew', [EmailsController::class, 'addNew'])->name('game.addNew');
    //Route::post('/game/updatetime', [EmailsController::class, 'updatetime'])->name('game.updatetime');
    Route::patch('/game', [EmailsController::class, 'update'])->name('game.update');
    Route::delete('/game', [EmailsController::class, 'destroy'])->name('game.destroy');
});