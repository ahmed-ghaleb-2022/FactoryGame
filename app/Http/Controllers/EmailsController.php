<?php

namespace App\Http\Controllers;
use App\Models\Email;
use App\Models\EmailUser;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Auth;

class EmailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user()->id;
        
        $Emails = DB::table('emails')
        ->join('email_user', 'emails.id', '=', 'email_user.email_id')
        ->join('users', 'email_user.user_id', '=', 'users.id')
        ->where('users.id', '=', $user)
        ->get();

        $listOfAllEmailsId = DB::table('emails')
        ->pluck('id')->toArray();

        $listOfEmailsId = DB::table('email_user')
        ->where('user_id', '=', $user)
        ->pluck('email_id')->toArray();

        $balance = DB::table('users')
        ->where('id', '=', $user)
        ->value('balance');


        $companies = DB::table('companies')
        ->get();
        

        return Inertia::render('Project/views/MainPage', compact('Emails','listOfAllEmailsId','listOfEmailsId','balance','companies'));
    }

   
    
    public function unread(Request $request)
    {
        
        $user = auth()->user()->id;
        DB::table('email_user')
            ->where('email_id', $request->id)
            ->where('user_id', $user)
            ->update(['isRead' => 1]);
    }

    public function help(Request $request)
    {
        
        $user = auth()->user()->id;
        DB::table('email_user')
            ->where('email_id', $request->id)
            ->where('user_id', $user)
            ->update(['helpUsed' => 1]);
    }

    public function response(Request $request)
    {
        
        $user = auth()->user()->id;
        DB::table('email_user')
            ->where('email_id', $request->id)
            ->where('user_id', $user)
            ->update(['response' => $request->response]);

            $balance = DB::table('users')
            ->where('id', '=', $user)
            ->value('balance');

            $isSafe = DB::table('emails')
            ->where('id', '=', $request->id)
            ->value('isSafe');

            if(($isSafe === 1 && $request->response === 1) || ($isSafe === 0 && $request->response === 0) ){
                $usedHelp = DB::table('email_user')
                ->where('email_id', '=', $request->id)
                ->where('user_id', $user)
                ->value('helpUsed');

                if($usedHelp === 1 ){

                    DB::table('users')
                    ->where('id', $user)
                    ->update(['balance' => $balance + 30]);

                }elseif($usedHelp === 0 ){
                    DB::table('users')
                    ->where('id', $user)
                    ->update(['balance' => $balance + 100]);
                }
            }elseif($isSafe === 1 && $request->response === 0 ){
                    //will not get any thing
            }elseif($isSafe === 0 && $request->response === 1 ){
                DB::table('users')
                ->where('id', $user)
                ->update(['balance' => $balance - 30]);
            }





        
    }

    public function addNew(Request $request)
    {
        
        $user = auth()->user()->id;

        DB::table('email_user')->insert([
                'email_id' =>  $request->randomEmail,
                'user_id' => $user
            ]);

        DB::table('users')
            ->where('id', $user)
            ->update(['emailsIhave' => $request->countEmailsIhave]);

        
    }

    public function showLeaderboard()
    {
        
        // $Emails = DB::table('emails')
        // ->join('email_user', 'emails.id', '=', 'email_user.email_id')
        // ->join('users', 'email_user.user_id', '=', 'users.id')
        // ->get('name');

        // $Emails = DB::table('users')
        // ->join('email_user', 'users.id', '=', 'email_user.user_id')
        // ->groupBy('name')
        // ->get();

        // $userCorrect = DB::table('users')
        // ->leftJoin('email_user', 'users.id', '=', 'email_user.user_id')
        // ->leftJoin('emails', 'email_user.email_id', '=', 'emails.id')
        //     ->select(
        //         'users.name',
        //         DB::raw('COUNT(emails.isSafe) AS saffy'),
        //         DB::raw('COUNT(email_user.response) AS respo')
        //     )
        //     ->Where('emails.isSafe', '=', 'email_user.response')
        //     ->groupBy('users.name')
        // ->get();

        // $userWrong = DB::table('users')
        // ->leftJoin('email_user', 'users.id', '=', 'email_user.user_id')
        // ->leftJoin('emails', 'email_user.email_id', '=', 'emails.id')
        //     ->select(
        //         'users.name',
        //         DB::raw('COUNT(emails.isSafe) AS saffy'),
        //         DB::raw('COUNT(email_user.response) AS respo')
        //     )
        //     ->Where('emails.isSafe', '<>', 'email_user.response')
        //     ->groupBy('users.name')
        // ->get();


        // dd($userWrong);

        // // DB::table('email_user')->insert([
        // //         'email_id' =>  $request->randomEmail,
        // //         'user_id' => $user
        // //     ]);

        $users = DB::table('users')
        ->leftJoin('email_user', 'users.id', '=', 'email_user.user_id')
        ->leftJoin('emails', 'email_user.email_id', '=', 'emails.id')
        ->get();



            return Inertia::render('Project/views/Leaderboard' ,compact('users'));


    }

}
